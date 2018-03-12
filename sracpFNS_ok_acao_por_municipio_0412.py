#!/usr/bin/env python
# -*- coding: utf-8 -*-
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from selenium import webdriver
import time, re, pandas as pd
from bs4 import BeautifulSoup
import numpy as np
import signal, sys

#banco de dados
from sqlalchemy import create_engine
import psycopg2

def get_table_results(driver):
    count_interno = 1
    tmp = []
    for row in driver.find_elements_by_css_selector("table[class]"):
        #for cell in row.find_elements_by_tag_name("td"):
        #    print(cell.text)
        rowCount = len(driver.find_elements_by_xpath("//tr"))
        if (rowCount <= 2):
            tmp.append([cell.text for cell in row.find_elements_by_tag_name("td")[0:4]])
        else:
            tmp.append([cell.text for cell in row.find_elements_by_tag_name("td")[5:9]])
    return tmp, rowCount

def get_num(driver): 
    action = []
    for row in driver:
        string1 = [row.get_attribute('ng-click')]
        string1 = ''.join(string1)
        action.append(int(re.search(r'\d+', string1).group()))
    return  action

def get_acao_table_results(driver):
    try:
        rowCount = len(driver.find_elements_by_xpath("//tr"))
        #print(rowCount)
        list_actions = []
        list_actions = get_num(driver.find_elements_by_css_selector("button[title='Detalhar Pagamento']"))
        maxSize = 1
        tmp_acao = []
        begin = 0
        end = 6    
        while (maxSize <= rowCount):
            for row in driver.find_elements_by_css_selector("table[class]"):
                tmp_acao.append([cell.text for cell in row.find_elements_by_tag_name("td")[begin:end]])
                if (maxSize <= (rowCount-2)):
                    tmp_acao[maxSize-1].extend([int(list_actions[maxSize-1])])
                    #tmp.append(str(list_actions[maxSize-1]))
                    #print[temp[-1]]
                    #tmp[-1].extend("teste")
                    #print[temp[-1]]
            maxSize += 1
            begin = begin +7
            end = end +7  
        return tmp_acao
    except: 
        pass

def get_acao_pagamento_table_results(driver):
    rowCount = len(driver.find_elements_by_xpath("//tr"))
    maxSize = 1
    tmp = []
    begin = 0
    end = 14    
    while (maxSize <= rowCount):
        for row in driver.find_elements_by_css_selector("table[class]"):
            tmp.append([cell.text for cell in row.find_elements_by_tag_name("td")[begin:end]])
        maxSize += 1
        begin = begin + 15
        end = end + 15  
    return tmp


def carga_completa(in_mes, in_estado, in_municipio):
    out = pd.DataFrame()
    try:
        url = "https://consultafns.saude.gov.br/#/detalhada"
        driver = webdriver.PhantomJS(executable_path=r'C:\Users\vinicius\phantomjs-2.1.1-windows\bin\phantomjs.exe')
        driver.get(url)
        #WebDriverWait(driver, 25).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
        wait = WebDriverWait(driver, 100)
        content = wait.until(EC.visibility_of_element_located((By.ID, "content")))
        
        WebDriverWait(driver, 25).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
        
        #seleciona o mes
        mes = wait.until(EC.visibility_of_element_located((By.ID, "mes")))
        
        for option in mes.find_elements_by_tag_name('option'):
            if option.text == in_mes:
                mes_cod = int(option.get_attribute('value')) + 1
                option.click() # select() in earlier versions of webdriver
                break
        
        WebDriverWait(driver, 25).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))

        
        #seleciona o estado
        el = wait.until(EC.visibility_of_element_located((By.ID, "estado")))
        for option in el.find_elements_by_tag_name('option'):
            if option.text == in_estado:
                option.click() # select() in earlier versions of webdriver
                break
        
        WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
        
        #seleciona o municipio
        mun = wait.until(EC.visibility_of_element_located((By.ID, "municipio")))
        for option in mun.find_elements_by_tag_name('option'):
            if option.text == in_municipio:
                option.click() # select() in earlier versions of webdriver
                break
        
        WebDriverWait(driver, 25).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
        
        #seleciona o BLOCO
        mun = wait.until(EC.visibility_of_element_located((By.ID, "blocos")))
        for option in mun.find_elements_by_tag_name('option'):
            if option.text == 'MÉDIA E ALTA COMPLEXIDADE AMBULATORIAL E HOSPITALAR':
                option.click() # select() in earlier versions of webdriver
                break
        
        WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
        
        #seleciona o COMPONENTE
        #mun = driver.find_element_by_id('componentes')
        #for option in mun.find_elements_by_tag_name('option'):
        #    if option.text == 'LIMITE FINANCEIRO DA MÉDIA E ALTA COMPLEXIDADE AMBUL. E HOSPITAR - MAC':
        #        option.click() # select() in earlier versions of webdriver
        #        break
        
        WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
        
        #wait.until(EC.element_to_be_clickable((By.XPATH, '//button[text()=" Consultar"]'))).click()
        
        buttons = driver.find_elements_by_xpath("//*[contains(text(), ' Consultar')]")
        for btn in buttons:
            btn.click()
        
        WebDriverWait(driver, 20).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))

        count = 1
        labels = ['nm_entidade', 'sg_uf', 'nm_municipio', 'cpf_cnpj']
        myvar = pd.DataFrame
        var = pd.DataFrame(np.nan, index=[0], columns=labels)
        
        labels_acao = ['nm_bloco', 'nm_componente', 'nm_acao', 'vl_total','vl_desconto','vl_liquido','acao_num']
        df_acao = pd.DataFrame(np.nan, index=[0], columns=labels_acao)
        
        labels_acao_pagamento = ['parcela', 'n_ob', 'dt_ob', 'tp_repasse','banco_ob','agencia_ob', 'conta_ob', 'vl_total', 'vl_desconto', 'vl_liquido', 'mt_rejeicao','nr_processo', 'nr_proposta','nr_portaria']
        df_acao_pagamento = pd.DataFrame(np.nan, index=[0], columns=labels_acao_pagamento)
        

        while count <= 1:
            
               
            tmp, rowCount = get_table_results(driver)
            
            
            myvar = pd.DataFrame.from_records(tmp, columns=labels)
            
            var = pd.concat([var, myvar], axis=0)   
            var = var.dropna()
            var['cpf_cnpj'] = var['cpf_cnpj'].str.replace('.','').str.replace('/','').str.replace('-','').str.lstrip('0')
            var_cnpj = var['cpf_cnpj'][0]
            var['cpf_cnpj'] = int(var['cpf_cnpj'][0])
            WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
            
            acao =  driver.find_element_by_css_selector("button[title='Detalhar']")
            
            WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
            acao.click()
            WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))

            a = driver.find_elements_by_xpath("//*[@ng-if='acaoCtrl.filtroData.entidade']")[1]
            var['cd_municipio'] = int(re.search(r'\d+', a.text).group())
            pref = driver.find_elements_by_xpath("//*[@ng-if='(acaoCtrl.filtroData.tipoConsulta != undefined && acaoCtrl.filtroData.tipoConsulta.valor == 2)']")[0]
            var['nm_prefeito'] = pref.text[pref.text.find('\n')+1:]
            secr = driver.find_elements_by_xpath("//*[@ng-if='(acaoCtrl.filtroData.tipoConsulta != undefined && acaoCtrl.filtroData.tipoConsulta.valor == 2)']")[2]
            var['nm_secretario'] = secr.text[secr.text.find('\n')+1:]            

            row_acao = get_acao_table_results(driver)

            df_acao = pd.DataFrame.from_records(row_acao, columns=labels_acao)
            df_acao = df_acao.dropna()
            df_acao['acao_num'] = (df_acao['acao_num'].astype(int).astype(str)) #df_acao['acao_num'].replace('.0','')
            df_acao['cnpj'] = var_cnpj
            ano = '2017'
            df_acao['ano'] = ano
            if len(str(mes_cod)) == 1:
                df_acao['mes'] =  '0'+str(mes_cod)+'/'+str(ano)
            if len(str(mes_cod)) == 2:
                df_acao['mes'] =  str(mes_cod)+'/'+str(ano)
            ano = str(df_acao['ano'][0])
            cd_municipio = str(var['cd_municipio'][0])[:str(var['cd_municipio'][0]).find('.')]
            df_acao['cd_acao'] = str(mes_cod)+str(ano)+str(cd_municipio)+(df_acao['acao_num'].astype(int).astype(str))
            #df_acao = df_acao.dropna()
            
            count = 1
            for index, row in df_acao.iterrows():
                #while (count <= 1 ):
                v_acao_num = row['acao_num']
                v_cd_acao = row['cd_acao']
                
                driver.find_element_by_css_selector("button[ng-click='acaoCtrl.detalhar("+v_acao_num+", true)']").click()
                WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
                row_acao_pagamento = get_acao_pagamento_table_results(driver)
                df_acao_pagamento_0 = pd.DataFrame.from_records(row_acao_pagamento, columns=labels_acao_pagamento)
                df_acao_pagamento_0['acao_num'] = v_acao_num
                df_acao_pagamento_0['cd_acao'] = v_cd_acao
                
                df_acao_pagamento_0 = df_acao_pagamento_0.dropna()
                df_acao_pagamento = pd.concat([df_acao_pagamento, df_acao_pagamento_0], axis=0)  
                wait.until(EC.element_to_be_clickable((By.XPATH, '//button[text()=" Voltar"]'))).click()
                WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
        
        
            try:
                next_link =  driver.find_element_by_css_selector("a[ng-switch-when='next']")
                if "disabled" not in next_link.get_attribute("class"):
                    next_link.click()
            except: 
                pass
        
            #time.sleep(1)  # TODO: fix?
            count += 1
            # wait for results to load
            WebDriverWait(driver, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
        
        
        
        df_acao_pagamento = df_acao_pagamento.dropna()
        
        engine = create_engine('postgresql://postgres:@prev@localhost:5432/avecdesenv')

    
        sql = "SELECT * FROM avec_pgf_entidade where cpf_cnpj = ""\'" + var_cnpj + "\'"
        
        df = pd.read_sql(sql, engine)
        
        var.to_sql('temp_pgf_entidade', engine, index=False, if_exists='replace')
        
        if df.empty:
            var.to_sql('avec_pgf_entidade', engine, index=False, if_exists='append')
        else:
            sql_update = """
            UPDATE avec_pgf_entidade AS f SET nm_entidade = t.nm_entidade, sg_uf = t.sg_uf, nm_municipio = t.nm_municipio, cd_municipio = t.cd_municipio, nm_prefeito =t.nm_prefeito, nm_secretario = t.nm_secretario
            FROM temp_pgf_entidade AS t WHERE f.cpf_cnpj = t.cpf_cnpj
            """
            with engine.begin() as conn:     # TRANSACTION
                conn.execute(sql_update)        
        df_acao.vl_total = df_acao.vl_total.str.replace('.','').str.replace(',','.')
        
        df_acao.to_sql('avec_pgf_acao', engine, index=False, if_exists='append')
        
        df_acao_pagamento.to_sql('avec_pgf_acao_detalhe', engine, index=False, if_exists='append')
    #    df_acao.to_excel(writer, sheet_name='acao')
    #    df_acao_pagamento.to_excel(writer, sheet_name='acao_pagamento')
        
        print(df_acao)
        #writer = pd.ExcelWriter(u'C:\\Users\\vinicius\\'+in_mes+'.xlsx', engine='xlsxwriter')
        #df_acao.to_excel(writer, sheet_name='df_acao')
        #writer.close()
        out = var 
        del var
        del myvar
        del df
        del df_acao
        del df_acao_pagamento
        del df_acao_pagamento_0
        driver.service.process.send_signal(signal.SIGTERM) # kill the specific phantomjs child proc
        driver.quit()                                      # quit the node proc
    except: 
        pass
    return out
    

oeste_baiano = ['BARREIRAS','LUIS EDUARDO MAGALHAES','SANTA MARIA DA VITORIA',
'CORRENTINA','SAO DESIDERIO','SANTA RITA DE CASSIA','SANTANA','FORMOSA DO RIO PRETO',
'RIACHAO DAS NEVES','COCOS','SERRA DOURADO','SAO FELIX DO CORIBE','CORIBE','ANGICAL','COTEGIPE','CRISTOPOLIS','BAIANOPOLIS',
'TABOCAS DO BREJO VELHO','MANSIDAO','WANDERLEY','BREJOLANDIA','CANAPOLIS','JABORANDI','CATOLANDIA']

oeste_baiano = ['COTEGIPE']

list_mes = ['Setembro']

for oeste in oeste_baiano:
    for mes in list_mes:
        count = 1
        out = pd.DataFrame()
        while out.empty and count <= 6:
            print(oeste+' - '+mes+' - '+str(count))
            out = carga_completa(mes, 'BAHIA', oeste)
            count +=1

count_city = 1
driver2 = webdriver.PhantomJS(executable_path=r'C:\Users\vinicius\phantomjs-2.1.1-windows\bin\phantomjs.exe')


url = "https://consultafns.saude.gov.br/#/detalhada"
driver2.get(url)
WebDriverWait(driver2, 25).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))
wait = WebDriverWait(driver2, 100)
wait.until(EC.visibility_of_element_located((By.ID, "content")))

WebDriverWait(driver2, 25).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))

#seleciona o estado
el = driver2.find_element_by_id('estado')
for option in el.find_elements_by_tag_name('option'):
    if option.text == 'BAHIA':
        option.click() # select() in earlier versions of webdriver
        break

WebDriverWait(driver2, 10).until(EC.invisibility_of_element_located((By.XPATH, u"//img[contains(@src, 'data:image')]")))

#seleciona o municipio
mun2 = driver2.find_element_by_id('municipio')
for option in mun2.find_elements_by_tag_name('option'):
    option.text
    print(cidade)
    if cidade != 'Selecione':
        for row_mes in list_mes:
            print(row_mes)
            print(cidade)
            carga_completa(row_mes, 'BAHIA', cidade)


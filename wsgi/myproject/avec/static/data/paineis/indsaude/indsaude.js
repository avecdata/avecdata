function iniciar2(){

var acre = [{"Proporcaodemenoresde5":11.7,"esperancadevidaaonascer":68.7,"esperancadevidaaos60":18.8,"graudeurbanizacao":68.7,"proporcaodeidosos":5.8,"razaodedependencia":77.6,"razaodesexos":99.9,"taxadefecundidadetotal":3.3,"ano":"2004-01-01"},{"Proporcaodemenoresde5":11.7,"esperancadevidaaonascer":69.3,"esperancadevidaaos60":19.1,"graudeurbanizacao":69.4,"proporcaodeidosos":5.9,"razaodedependencia":76.4,"razaodesexos":98.3,"taxadefecundidadetotal":3.22,"ano":"2005-01-01"},{"Proporcaodemenoresde5":11.9,"esperancadevidaaonascer":69.8,"esperancadevidaaos60":19.3,"graudeurbanizacao":70.1,"proporcaodeidosos":6.5,"razaodedependencia":73.7,"razaodesexos":102.5,"taxadefecundidadetotal":3.14,"ano":"2006-01-01"},{"Proporcaodemenoresde5":10.6,"esperancadevidaaonascer":70.3,"esperancadevidaaos60":19.6,"graudeurbanizacao":70.7,"proporcaodeidosos":5.7,"razaodedependencia":71.5,"razaodesexos":100.0,"taxadefecundidadetotal":3.05,"ano":"2007-01-01"},{"Proporcaodemenoresde5":11.2,"esperancadevidaaonascer":70.8,"esperancadevidaaos60":19.9,"graudeurbanizacao":71.4,"proporcaodeidosos":6.5,"razaodedependencia":69.2,"razaodesexos":101.1,"taxadefecundidadetotal":2.97,"ano":"2008-01-01"},{"Proporcaodemenoresde5":10.8,"esperancadevidaaonascer":71.2,"esperancadevidaaos60":20.1,"graudeurbanizacao":72.0,"proporcaodeidosos":6.7,"razaodedependencia":69.0,"razaodesexos":101.2,"taxadefecundidadetotal":2.89,"ano":"2009-01-01"},{"Proporcaodemenoresde5":9.5,"esperancadevidaaonascer":72.1,"esperancadevidaaos60":20.6,"graudeurbanizacao":77.0,"proporcaodeidosos":7.1,"razaodedependencia":66.0,"razaodesexos":98.8,"taxadefecundidadetotal":2.74,"ano":"2011-01-01"},{"Proporcaodemenoresde5":9.9,"esperancadevidaaonascer":72.5,"esperancadevidaaos60":20.8,"graudeurbanizacao":73.2,"proporcaodeidosos":7.3,"razaodedependencia":64.6,"razaodesexos":102.1,"taxadefecundidadetotal":2.66,"ano":"2012-01-01"},{"Proporcaodemenoresde5":9.6,"esperancadevidaaonascer":72.9,"esperancadevidaaos60":20.9,"graudeurbanizacao":71.2,"proporcaodeidosos":7.3,"razaodedependencia":64.0,"razaodesexos":99.0,"taxadefecundidadetotal":2.59,"ano":"2013-01-01"},{"Proporcaodemenoresde5":10.1,"esperancadevidaaonascer":73.3,"esperancadevidaaos60":21.1,"graudeurbanizacao":74.1,"proporcaodeidosos":7.2,"razaodedependencia":63.9,"razaodesexos":100.3,"taxadefecundidadetotal":2.52,"ano":"2014-01-01"},{"Proporcaodemenoresde5":9.7,"esperancadevidaaonascer":73.6,"esperancadevidaaos60":21.3,"graudeurbanizacao":71.1,"proporcaodeidosos":8.8,"razaodedependencia":60.8,"razaodesexos":100.9,"taxadefecundidadetotal":2.45,"ano":"2015-01-01"}];
var alagoas = [{"Proporcaodemenoresde5":10.2,"esperancadevidaaonascer":66.3,"esperancadevidaaos60":18.4,"graudeurbanizacao":66.2,"proporcaodeidosos":8.9,"razaodedependencia":70.2,"razaodesexos":95.2,"taxadefecundidadetotal":2.72,"ano":"2004-01-01"},{"Proporcaodemenoresde5":9.7,"esperancadevidaaonascer":66.8,"esperancadevidaaos60":18.6,"graudeurbanizacao":65.2,"proporcaodeidosos":8.7,"razaodedependencia":69.3,"razaodesexos":94.1,"taxadefecundidadetotal":2.63,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.9,"esperancadevidaaonascer":67.3,"esperancadevidaaos60":18.8,"graudeurbanizacao":67.4,"proporcaodeidosos":9.3,"razaodedependencia":68.6,"razaodesexos":97.3,"taxadefecundidadetotal":2.54,"ano":"2006-01-01"},{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":67.8,"esperancadevidaaos60":18.9,"graudeurbanizacao":68.7,"proporcaodeidosos":9.7,"razaodedependencia":64.4,"razaodesexos":94.8,"taxadefecundidadetotal":2.45,"ano":"2007-01-01"},{"Proporcaodemenoresde5":9.6,"esperancadevidaaonascer":68.3,"esperancadevidaaos60":19.1,"graudeurbanizacao":68.0,"proporcaodeidosos":9.5,"razaodedependencia":68.1,"razaodesexos":94.3,"taxadefecundidadetotal":2.37,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.9,"esperancadevidaaonascer":68.7,"esperancadevidaaos60":19.3,"graudeurbanizacao":68.0,"proporcaodeidosos":10.0,"razaodedependencia":63.0,"razaodesexos":94.6,"taxadefecundidadetotal":2.29,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":69.6,"esperancadevidaaos60":19.7,"graudeurbanizacao":72.0,"proporcaodeidosos":9.8,"razaodedependencia":62.3,"razaodesexos":93.4,"taxadefecundidadetotal":2.16,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.8,"esperancadevidaaonascer":70.0,"esperancadevidaaos60":19.8,"graudeurbanizacao":71.4,"proporcaodeidosos":10.5,"razaodedependencia":59.3,"razaodesexos":93.5,"taxadefecundidadetotal":2.1,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":70.4,"esperancadevidaaos60":20.0,"graudeurbanizacao":71.5,"proporcaodeidosos":10.9,"razaodedependencia":60.2,"razaodesexos":90.4,"taxadefecundidadetotal":2.04,"ano":"2013-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":70.8,"esperancadevidaaos60":20.2,"graudeurbanizacao":71.7,"proporcaodeidosos":10.7,"razaodedependencia":56.3,"razaodesexos":93.6,"taxadefecundidadetotal":1.99,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.7,"esperancadevidaaonascer":71.2,"esperancadevidaaos60":20.3,"graudeurbanizacao":73.9,"proporcaodeidosos":12.8,"razaodedependencia":58.3,"razaodesexos":91.7,"taxadefecundidadetotal":1.94,"ano":"2015-01-01"}];
var amapa = [{"Proporcaodemenoresde5":12.7,"esperancadevidaaonascer":69.8,"esperancadevidaaos60":19.2,"graudeurbanizacao":89.2,"proporcaodeidosos":5.0,"razaodedependencia":73.2,"razaodesexos":94.7,"taxadefecundidadetotal":3.33,"ano":"2004-01-01"},{"Proporcaodemenoresde5":11.2,"esperancadevidaaonascer":70.2,"esperancadevidaaos60":19.5,"graudeurbanizacao":89.3,"proporcaodeidosos":4.9,"razaodedependencia":68.8,"razaodesexos":97.7,"taxadefecundidadetotal":3.22,"ano":"2005-01-01"},{"Proporcaodemenoresde5":10.9,"esperancadevidaaonascer":70.6,"esperancadevidaaos60":19.8,"graudeurbanizacao":89.4,"proporcaodeidosos":4.7,"razaodedependencia":63.9,"razaodesexos":99.0,"taxadefecundidadetotal":3.11,"ano":"2006-01-01"},{"Proporcaodemenoresde5":11.0,"esperancadevidaaonascer":71.0,"esperancadevidaaos60":20.0,"graudeurbanizacao":89.5,"proporcaodeidosos":5.0,"razaodedependencia":67.5,"razaodesexos":97.1,"taxadefecundidadetotal":3.0,"ano":"2007-01-01"},{"Proporcaodemenoresde5":9.6,"esperancadevidaaonascer":71.4,"esperancadevidaaos60":20.3,"graudeurbanizacao":89.6,"proporcaodeidosos":4.9,"razaodedependencia":58.9,"razaodesexos":103.9,"taxadefecundidadetotal":2.9,"ano":"2008-01-01"},{"Proporcaodemenoresde5":9.5,"esperancadevidaaonascer":71.8,"esperancadevidaaos60":20.5,"graudeurbanizacao":89.7,"proporcaodeidosos":6.2,"razaodedependencia":62.4,"razaodesexos":102.4,"taxadefecundidadetotal":2.79,"ano":"2009-01-01"},{"Proporcaodemenoresde5":9.1,"esperancadevidaaonascer":72.5,"esperancadevidaaos60":20.9,"graudeurbanizacao":89.3,"proporcaodeidosos":5.9,"razaodedependencia":59.7,"razaodesexos":100.6,"taxadefecundidadetotal":2.6,"ano":"2011-01-01"},{"Proporcaodemenoresde5":8.8,"esperancadevidaaonascer":72.8,"esperancadevidaaos60":21.1,"graudeurbanizacao":88.6,"proporcaodeidosos":5.1,"razaodedependencia":58.7,"razaodesexos":96.4,"taxadefecundidadetotal":2.51,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.8,"esperancadevidaaonascer":73.1,"esperancadevidaaos60":21.3,"graudeurbanizacao":90.0,"proporcaodeidosos":6.4,"razaodedependencia":57.1,"razaodesexos":100.0,"taxadefecundidadetotal":2.42,"ano":"2013-01-01"},{"Proporcaodemenoresde5":9.6,"esperancadevidaaonascer":73.4,"esperancadevidaaos60":21.4,"graudeurbanizacao":89.6,"proporcaodeidosos":6.5,"razaodedependencia":56.1,"razaodesexos":100.0,"taxadefecundidadetotal":2.34,"ano":"2014-01-01"},{"Proporcaodemenoresde5":8.7,"esperancadevidaaonascer":73.7,"esperancadevidaaos60":21.6,"graudeurbanizacao":86.7,"proporcaodeidosos":8.0,"razaodedependencia":59.6,"razaodesexos":99.2,"taxadefecundidadetotal":2.27,"ano":"2015-01-01"}];
var amazonas = [{"Proporcaodemenoresde5":11.6,"esperancadevidaaonascer":68.6,"esperancadevidaaos60":18.2,"graudeurbanizacao":76.9,"proporcaodeidosos":5.3,"razaodedependencia":69.9,"razaodesexos":101.0,"taxadefecundidadetotal":3.03,"ano":"2004-01-01"},{"Proporcaodemenoresde5":10.7,"esperancadevidaaonascer":68.9,"esperancadevidaaos60":18.4,"graudeurbanizacao":77.3,"proporcaodeidosos":5.3,"razaodedependencia":66.6,"razaodesexos":101.1,"taxadefecundidadetotal":2.96,"ano":"2005-01-01"},{"Proporcaodemenoresde5":11.0,"esperancadevidaaonascer":69.2,"esperancadevidaaos60":18.7,"graudeurbanizacao":77.7,"proporcaodeidosos":5.9,"razaodedependencia":65.0,"razaodesexos":104.5,"taxadefecundidadetotal":2.88,"ano":"2006-01-01"},{"Proporcaodemenoresde5":10.7,"esperancadevidaaonascer":69.5,"esperancadevidaaos60":18.9,"graudeurbanizacao":78.1,"proporcaodeidosos":5.7,"razaodedependencia":69.2,"razaodesexos":100.2,"taxadefecundidadetotal":2.81,"ano":"2007-01-01"},{"Proporcaodemenoresde5":10.1,"esperancadevidaaonascer":69.8,"esperancadevidaaos60":19.2,"graudeurbanizacao":78.4,"proporcaodeidosos":6.3,"razaodedependencia":65.9,"razaodesexos":98.6,"taxadefecundidadetotal":2.73,"ano":"2008-01-01"},{"Proporcaodemenoresde5":9.5,"esperancadevidaaonascer":70.1,"esperancadevidaaos60":19.4,"graudeurbanizacao":78.8,"proporcaodeidosos":6.5,"razaodedependencia":61.7,"razaodesexos":99.3,"taxadefecundidadetotal":2.66,"ano":"2009-01-01"},{"Proporcaodemenoresde5":10.0,"esperancadevidaaonascer":70.6,"esperancadevidaaos60":19.8,"graudeurbanizacao":80.5,"proporcaodeidosos":7.0,"razaodedependencia":64.4,"razaodesexos":99.6,"taxadefecundidadetotal":2.52,"ano":"2011-01-01"},{"Proporcaodemenoresde5":9.7,"esperancadevidaaonascer":70.9,"esperancadevidaaos60":19.9,"graudeurbanizacao":83.8,"proporcaodeidosos":7.6,"razaodedependencia":64.1,"razaodesexos":101.9,"taxadefecundidadetotal":2.45,"ano":"2012-01-01"},{"Proporcaodemenoresde5":9.4,"esperancadevidaaonascer":71.2,"esperancadevidaaos60":20.0,"graudeurbanizacao":83.2,"proporcaodeidosos":7.3,"razaodedependencia":62.0,"razaodesexos":100.8,"taxadefecundidadetotal":2.38,"ano":"2013-01-01"},{"Proporcaodemenoresde5":9.2,"esperancadevidaaonascer":71.4,"esperancadevidaaos60":20.1,"graudeurbanizacao":83.7,"proporcaodeidosos":7.9,"razaodedependencia":58.2,"razaodesexos":99.0,"taxadefecundidadetotal":2.32,"ano":"2014-01-01"},{"Proporcaodemenoresde5":9.0,"esperancadevidaaonascer":71.7,"esperancadevidaaos60":20.2,"graudeurbanizacao":84.0,"proporcaodeidosos":8.8,"razaodedependencia":60.6,"razaodesexos":102.0,"taxadefecundidadetotal":2.26,"ano":"2015-01-01"}];
var bahia = [{"Proporcaodemenoresde5":9.2,"esperancadevidaaonascer":70.1,"esperancadevidaaos60":20.0,"graudeurbanizacao":67.9,"proporcaodeidosos":9.3,"razaodedependencia":62.7,"razaodesexos":97.6,"taxadefecundidadetotal":2.2,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.9,"esperancadevidaaonascer":70.4,"esperancadevidaaos60":20.2,"graudeurbanizacao":66.8,"proporcaodeidosos":9.2,"razaodedependencia":62.0,"razaodesexos":98.2,"taxadefecundidadetotal":2.14,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.4,"esperancadevidaaonascer":70.7,"esperancadevidaaos60":20.3,"graudeurbanizacao":67.6,"proporcaodeidosos":9.6,"razaodedependencia":60.7,"razaodesexos":97.9,"taxadefecundidadetotal":2.08,"ano":"2006-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":71.0,"esperancadevidaaos60":20.5,"graudeurbanizacao":68.0,"proporcaodeidosos":9.9,"razaodedependencia":60.2,"razaodesexos":97.6,"taxadefecundidadetotal":2.03,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":71.3,"esperancadevidaaos60":20.6,"graudeurbanizacao":68.8,"proporcaodeidosos":10.3,"razaodedependencia":58.5,"razaodesexos":97.5,"taxadefecundidadetotal":1.98,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":71.6,"esperancadevidaaos60":20.8,"graudeurbanizacao":69.4,"proporcaodeidosos":10.7,"razaodedependencia":59.0,"razaodesexos":97.2,"taxadefecundidadetotal":1.93,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":72.2,"esperancadevidaaos60":21.1,"graudeurbanizacao":73.6,"proporcaodeidosos":11.2,"razaodedependencia":58.0,"razaodesexos":93.5,"taxadefecundidadetotal":1.86,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":72.5,"esperancadevidaaos60":21.2,"graudeurbanizacao":73.9,"proporcaodeidosos":12.0,"razaodedependencia":57.4,"razaodesexos":95.2,"taxadefecundidadetotal":1.82,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.7,"esperancadevidaaonascer":72.7,"esperancadevidaaos60":21.3,"graudeurbanizacao":74.0,"proporcaodeidosos":12.5,"razaodedependencia":58.3,"razaodesexos":94.2,"taxadefecundidadetotal":1.79,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":73.0,"esperancadevidaaos60":21.4,"graudeurbanizacao":75.1,"proporcaodeidosos":13.1,"razaodedependencia":56.5,"razaodesexos":93.0,"taxadefecundidadetotal":1.76,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":73.2,"esperancadevidaaos60":21.5,"graudeurbanizacao":74.1,"proporcaodeidosos":13.4,"razaodedependencia":56.7,"razaodesexos":93.3,"taxadefecundidadetotal":1.74,"ano":"2015-01-01"}];
var brasil = [{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":71.6,"esperancadevidaaos60":20.0,"graudeurbanizacao":82.7,"proporcaodeidosos":9.6,"razaodedependencia":58.3,"razaodesexos":95.0,"taxadefecundidadetotal":2.14,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":72.0,"esperancadevidaaos60":20.2,"graudeurbanizacao":82.5,"proporcaodeidosos":9.8,"razaodedependencia":57.2,"razaodesexos":95.1,"taxadefecundidadetotal":2.09,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":72.4,"esperancadevidaaos60":20.4,"graudeurbanizacao":82.9,"proporcaodeidosos":10.2,"razaodedependencia":56.8,"razaodesexos":95.0,"taxadefecundidadetotal":2.04,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":72.8,"esperancadevidaaos60":20.6,"graudeurbanizacao":83.0,"proporcaodeidosos":10.5,"razaodedependencia":56.2,"razaodesexos":95.4,"taxadefecundidadetotal":1.99,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":73.1,"esperancadevidaaos60":20.8,"graudeurbanizacao":83.3,"proporcaodeidosos":11.0,"razaodedependencia":55.8,"razaodesexos":94.9,"taxadefecundidadetotal":1.95,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.9,"esperancadevidaaonascer":73.5,"esperancadevidaaos60":21.0,"graudeurbanizacao":83.6,"proporcaodeidosos":11.4,"razaodedependencia":55.2,"razaodesexos":94.9,"taxadefecundidadetotal":1.91,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":74.2,"esperancadevidaaos60":21.4,"graudeurbanizacao":85.0,"proporcaodeidosos":12.1,"razaodedependencia":54.6,"razaodesexos":94.3,"taxadefecundidadetotal":1.83,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":74.5,"esperancadevidaaos60":21.6,"graudeurbanizacao":84.8,"proporcaodeidosos":12.6,"razaodedependencia":55.0,"razaodesexos":94.8,"taxadefecundidadetotal":1.8,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":74.8,"esperancadevidaaos60":21.7,"graudeurbanizacao":84.8,"proporcaodeidosos":13.1,"razaodedependencia":54.6,"razaodesexos":94.5,"taxadefecundidadetotal":1.77,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":75.1,"esperancadevidaaos60":21.9,"graudeurbanizacao":85.1,"proporcaodeidosos":13.7,"razaodedependencia":54.7,"razaodesexos":93.9,"taxadefecundidadetotal":1.74,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.3,"esperancadevidaaonascer":75.4,"esperancadevidaaos60":22.1,"graudeurbanizacao":84.7,"proporcaodeidosos":14.3,"razaodedependencia":54.7,"razaodesexos":94.3,"taxadefecundidadetotal":1.72,"ano":"2015-01-01"}];
var ceara = [{"Proporcaodemenoresde5":9.0,"esperancadevidaaonascer":70.7,"esperancadevidaaos60":19.8,"graudeurbanizacao":76.8,"proporcaodeidosos":9.5,"razaodedependencia":65.5,"razaodesexos":94.1,"taxadefecundidadetotal":2.4,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":71.0,"esperancadevidaaos60":20.0,"graudeurbanizacao":76.0,"proporcaodeidosos":9.7,"razaodedependencia":64.7,"razaodesexos":93.7,"taxadefecundidadetotal":2.31,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":71.3,"esperancadevidaaos60":20.1,"graudeurbanizacao":76.6,"proporcaodeidosos":9.9,"razaodedependencia":63.4,"razaodesexos":94.1,"taxadefecundidadetotal":2.23,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":71.6,"esperancadevidaaos60":20.3,"graudeurbanizacao":76.7,"proporcaodeidosos":10.4,"razaodedependencia":63.8,"razaodesexos":94.1,"taxadefecundidadetotal":2.15,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":71.9,"esperancadevidaaos60":20.5,"graudeurbanizacao":77.3,"proporcaodeidosos":10.8,"razaodedependencia":60.4,"razaodesexos":94.7,"taxadefecundidadetotal":2.08,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.9,"esperancadevidaaonascer":72.1,"esperancadevidaaos60":20.6,"graudeurbanizacao":77.6,"proporcaodeidosos":10.5,"razaodedependencia":60.3,"razaodesexos":92.8,"taxadefecundidadetotal":2.02,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":72.7,"esperancadevidaaos60":20.9,"graudeurbanizacao":73.0,"proporcaodeidosos":12.5,"razaodedependencia":59.1,"razaodesexos":93.1,"taxadefecundidadetotal":1.91,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.0,"esperancadevidaaonascer":72.9,"esperancadevidaaos60":21.0,"graudeurbanizacao":73.4,"proporcaodeidosos":13.0,"razaodedependencia":58.5,"razaodesexos":93.1,"taxadefecundidadetotal":1.87,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.5,"esperancadevidaaonascer":73.2,"esperancadevidaaos60":21.1,"graudeurbanizacao":73.0,"proporcaodeidosos":13.2,"razaodedependencia":57.6,"razaodesexos":93.9,"taxadefecundidadetotal":1.82,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":73.4,"esperancadevidaaos60":21.2,"graudeurbanizacao":73.5,"proporcaodeidosos":13.8,"razaodedependencia":57.5,"razaodesexos":94.7,"taxadefecundidadetotal":1.79,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.3,"esperancadevidaaonascer":73.6,"esperancadevidaaos60":21.3,"graudeurbanizacao":72.5,"proporcaodeidosos":14.9,"razaodedependencia":58.5,"razaodesexos":96.3,"taxadefecundidadetotal":1.76,"ano":"2015-01-01"}];
var centrooeste = [{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":72.1,"esperancadevidaaos60":20.0,"graudeurbanizacao":86.3,"proporcaodeidosos":7.6,"razaodedependencia":54.9,"razaodesexos":95.5,"taxadefecundidadetotal":2.05,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":72.3,"esperancadevidaaos60":20.2,"graudeurbanizacao":86.0,"proporcaodeidosos":7.9,"razaodedependencia":53.9,"razaodesexos":95.4,"taxadefecundidadetotal":2.01,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.8,"esperancadevidaaonascer":72.6,"esperancadevidaaos60":20.3,"graudeurbanizacao":86.3,"proporcaodeidosos":8.2,"razaodedependencia":53.3,"razaodesexos":97.6,"taxadefecundidadetotal":1.97,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.9,"esperancadevidaaonascer":72.9,"esperancadevidaaos60":20.5,"graudeurbanizacao":86.8,"proporcaodeidosos":8.7,"razaodedependencia":52.7,"razaodesexos":98.4,"taxadefecundidadetotal":1.93,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":73.2,"esperancadevidaaos60":20.6,"graudeurbanizacao":87.7,"proporcaodeidosos":9.1,"razaodedependencia":53.0,"razaodesexos":97.0,"taxadefecundidadetotal":1.89,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":73.4,"esperancadevidaaos60":20.8,"graudeurbanizacao":87.9,"proporcaodeidosos":9.5,"razaodedependencia":52.3,"razaodesexos":96.1,"taxadefecundidadetotal":1.86,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":73.9,"esperancadevidaaos60":21.1,"graudeurbanizacao":90.8,"proporcaodeidosos":10.1,"razaodedependencia":50.2,"razaodesexos":95.5,"taxadefecundidadetotal":1.8,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":74.2,"esperancadevidaaos60":21.2,"graudeurbanizacao":90.2,"proporcaodeidosos":10.8,"razaodedependencia":51.0,"razaodesexos":97.2,"taxadefecundidadetotal":1.77,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":74.4,"esperancadevidaaos60":21.3,"graudeurbanizacao":90.1,"proporcaodeidosos":11.1,"razaodedependencia":50.1,"razaodesexos":97.3,"taxadefecundidadetotal":1.74,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":74.7,"esperancadevidaaos60":21.5,"graudeurbanizacao":90.3,"proporcaodeidosos":11.7,"razaodedependencia":51.8,"razaodesexos":98.0,"taxadefecundidadetotal":1.72,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":74.9,"esperancadevidaaos60":21.6,"graudeurbanizacao":89.8,"proporcaodeidosos":12.1,"razaodedependencia":51.2,"razaodesexos":95.9,"taxadefecundidadetotal":1.69,"ano":"2015-01-01"}];
var distritofederal = [{"Proporcaodemenoresde5":8.9,"esperancadevidaaonascer":74.1,"esperancadevidaaos60":20.7,"graudeurbanizacao":94.8,"proporcaodeidosos":6.1,"razaodedependencia":50.4,"razaodesexos":87.6,"taxadefecundidadetotal":1.83,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.9,"esperancadevidaaonascer":74.5,"esperancadevidaaos60":21.0,"graudeurbanizacao":94.7,"proporcaodeidosos":6.4,"razaodedependencia":49.6,"razaodesexos":89.8,"taxadefecundidadetotal":1.79,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":74.9,"esperancadevidaaos60":21.2,"graudeurbanizacao":94.0,"proporcaodeidosos":6.5,"razaodedependencia":48.2,"razaodesexos":89.6,"taxadefecundidadetotal":1.76,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":75.3,"esperancadevidaaos60":21.4,"graudeurbanizacao":94.2,"proporcaodeidosos":7.3,"razaodedependencia":47.0,"razaodesexos":90.9,"taxadefecundidadetotal":1.73,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":75.6,"esperancadevidaaos60":21.7,"graudeurbanizacao":94.2,"proporcaodeidosos":7.9,"razaodedependencia":48.2,"razaodesexos":88.8,"taxadefecundidadetotal":1.7,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":76.0,"esperancadevidaaos60":21.9,"graudeurbanizacao":94.1,"proporcaodeidosos":8.0,"razaodedependencia":45.9,"razaodesexos":90.1,"taxadefecundidadetotal":1.67,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":76.7,"esperancadevidaaos60":22.3,"graudeurbanizacao":96.4,"proporcaodeidosos":8.8,"razaodedependencia":46.4,"razaodesexos":90.4,"taxadefecundidadetotal":1.63,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":77.0,"esperancadevidaaos60":22.5,"graudeurbanizacao":95.6,"proporcaodeidosos":9.7,"razaodedependencia":49.0,"razaodesexos":91.2,"taxadefecundidadetotal":1.61,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":77.3,"esperancadevidaaos60":22.7,"graudeurbanizacao":95.5,"proporcaodeidosos":9.4,"razaodedependencia":45.6,"razaodesexos":88.2,"taxadefecundidadetotal":1.59,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":77.6,"esperancadevidaaos60":22.8,"graudeurbanizacao":95.6,"proporcaodeidosos":10.9,"razaodedependencia":47.9,"razaodesexos":95.0,"taxadefecundidadetotal":1.57,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.7,"esperancadevidaaonascer":77.8,"esperancadevidaaos60":23.0,"graudeurbanizacao":95.3,"proporcaodeidosos":11.4,"razaodedependencia":45.8,"razaodesexos":90.2,"taxadefecundidadetotal":1.56,"ano":"2015-01-01"}];
var espiritosanto = [{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":72.9,"esperancadevidaaos60":21.0,"graudeurbanizacao":82.0,"proporcaodeidosos":9.1,"razaodedependencia":55.3,"razaodesexos":95.6,"taxadefecundidadetotal":1.97,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.4,"esperancadevidaaonascer":73.4,"esperancadevidaaos60":21.3,"graudeurbanizacao":83.2,"proporcaodeidosos":8.3,"razaodedependencia":52.6,"razaodesexos":96.1,"taxadefecundidadetotal":1.92,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":74.0,"esperancadevidaaos60":21.7,"graudeurbanizacao":82.2,"proporcaodeidosos":9.1,"razaodedependencia":53.3,"razaodesexos":97.9,"taxadefecundidadetotal":1.89,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":74.5,"esperancadevidaaos60":22.0,"graudeurbanizacao":82.2,"proporcaodeidosos":9.8,"razaodedependencia":53.5,"razaodesexos":94.6,"taxadefecundidadetotal":1.85,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":75.0,"esperancadevidaaos60":22.3,"graudeurbanizacao":82.2,"proporcaodeidosos":10.9,"razaodedependencia":53.9,"razaodesexos":95.5,"taxadefecundidadetotal":1.81,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.0,"esperancadevidaaonascer":75.5,"esperancadevidaaos60":22.6,"graudeurbanizacao":82.6,"proporcaodeidosos":10.7,"razaodedependencia":53.6,"razaodesexos":96.9,"taxadefecundidadetotal":1.78,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.7,"esperancadevidaaonascer":76.4,"esperancadevidaaos60":23.1,"graudeurbanizacao":85.2,"proporcaodeidosos":11.4,"razaodedependencia":50.5,"razaodesexos":94.2,"taxadefecundidadetotal":1.72,"ano":"2011-01-01"},{"Proporcaodemenoresde5":5.8,"esperancadevidaaonascer":76.8,"esperancadevidaaos60":23.3,"graudeurbanizacao":86.3,"proporcaodeidosos":12.7,"razaodedependencia":52.5,"razaodesexos":97.4,"taxadefecundidadetotal":1.7,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.3,"esperancadevidaaonascer":77.1,"esperancadevidaaos60":23.5,"graudeurbanizacao":86.0,"proporcaodeidosos":12.7,"razaodedependencia":51.9,"razaodesexos":96.0,"taxadefecundidadetotal":1.67,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.5,"esperancadevidaaonascer":77.5,"esperancadevidaaos60":23.7,"graudeurbanizacao":84.5,"proporcaodeidosos":13.6,"razaodedependencia":53.8,"razaodesexos":94.5,"taxadefecundidadetotal":1.65,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":77.9,"esperancadevidaaos60":23.8,"graudeurbanizacao":85.0,"proporcaodeidosos":14.8,"razaodedependencia":54.6,"razaodesexos":92.2,"taxadefecundidadetotal":1.63,"ano":"2015-01-01"}];
var goias = [{"Proporcaodemenoresde5":8.4,"esperancadevidaaonascer":72.0,"esperancadevidaaos60":20.0,"graudeurbanizacao":87.8,"proporcaodeidosos":8.6,"razaodedependencia":55.5,"razaodesexos":96.6,"taxadefecundidadetotal":1.99,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.1,"esperancadevidaaonascer":72.2,"esperancadevidaaos60":20.1,"graudeurbanizacao":87.5,"proporcaodeidosos":8.5,"razaodedependencia":55.0,"razaodesexos":94.1,"taxadefecundidadetotal":1.94,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":72.4,"esperancadevidaaos60":20.2,"graudeurbanizacao":88.6,"proporcaodeidosos":8.8,"razaodedependencia":53.2,"razaodesexos":97.7,"taxadefecundidadetotal":1.89,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":72.6,"esperancadevidaaos60":20.3,"graudeurbanizacao":89.5,"proporcaodeidosos":9.1,"razaodedependencia":52.4,"razaodesexos":98.8,"taxadefecundidadetotal":1.85,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":72.8,"esperancadevidaaos60":20.5,"graudeurbanizacao":89.8,"proporcaodeidosos":10.0,"razaodedependencia":54.8,"razaodesexos":97.9,"taxadefecundidadetotal":1.81,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":72.9,"esperancadevidaaos60":20.6,"graudeurbanizacao":89.2,"proporcaodeidosos":10.0,"razaodedependencia":53.4,"razaodesexos":95.7,"taxadefecundidadetotal":1.77,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":73.3,"esperancadevidaaos60":20.8,"graudeurbanizacao":92.1,"proporcaodeidosos":10.7,"razaodedependencia":51.0,"razaodesexos":93.9,"taxadefecundidadetotal":1.71,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.9,"esperancadevidaaonascer":73.5,"esperancadevidaaos60":20.9,"graudeurbanizacao":91.6,"proporcaodeidosos":11.5,"razaodedependencia":50.6,"razaodesexos":96.8,"taxadefecundidadetotal":1.68,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":73.7,"esperancadevidaaos60":20.9,"graudeurbanizacao":91.6,"proporcaodeidosos":11.7,"razaodedependencia":50.9,"razaodesexos":99.9,"taxadefecundidadetotal":1.66,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":73.8,"esperancadevidaaos60":21.0,"graudeurbanizacao":92.2,"proporcaodeidosos":12.7,"razaodedependencia":52.6,"razaodesexos":97.1,"taxadefecundidadetotal":1.63,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":74.0,"esperancadevidaaos60":21.1,"graudeurbanizacao":91.6,"proporcaodeidosos":12.4,"razaodedependencia":51.4,"razaodesexos":95.0,"taxadefecundidadetotal":1.61,"ano":"2015-01-01"}];
var maranhao = [{"Proporcaodemenoresde5":10.7,"esperancadevidaaonascer":66.7,"esperancadevidaaos60":18.5,"graudeurbanizacao":68.1,"proporcaodeidosos":7.9,"razaodedependencia":71.3,"razaodesexos":96.5,"taxadefecundidadetotal":2.9,"ano":"2004-01-01"},{"Proporcaodemenoresde5":10.9,"esperancadevidaaonascer":67.1,"esperancadevidaaos60":18.6,"graudeurbanizacao":65.2,"proporcaodeidosos":7.7,"razaodedependencia":68.4,"razaodesexos":98.4,"taxadefecundidadetotal":2.82,"ano":"2005-01-01"},{"Proporcaodemenoresde5":10.4,"esperancadevidaaonascer":67.4,"esperancadevidaaos60":18.8,"graudeurbanizacao":67.0,"proporcaodeidosos":8.3,"razaodedependencia":72.7,"razaodesexos":98.8,"taxadefecundidadetotal":2.75,"ano":"2006-01-01"},{"Proporcaodemenoresde5":10.0,"esperancadevidaaonascer":67.8,"esperancadevidaaos60":19.0,"graudeurbanizacao":67.7,"proporcaodeidosos":8.6,"razaodedependencia":69.5,"razaodesexos":96.3,"taxadefecundidadetotal":2.67,"ano":"2007-01-01"},{"Proporcaodemenoresde5":9.8,"esperancadevidaaonascer":68.1,"esperancadevidaaos60":19.2,"graudeurbanizacao":69.0,"proporcaodeidosos":8.6,"razaodedependencia":69.7,"razaodesexos":99.5,"taxadefecundidadetotal":2.6,"ano":"2008-01-01"},{"Proporcaodemenoresde5":9.6,"esperancadevidaaonascer":68.4,"esperancadevidaaos60":19.4,"graudeurbanizacao":69.5,"proporcaodeidosos":9.2,"razaodedependencia":66.2,"razaodesexos":96.5,"taxadefecundidadetotal":2.53,"ano":"2009-01-01"},{"Proporcaodemenoresde5":9.8,"esperancadevidaaonascer":69.1,"esperancadevidaaos60":19.7,"graudeurbanizacao":60.2,"proporcaodeidosos":10.5,"razaodedependencia":70.9,"razaodesexos":96.3,"taxadefecundidadetotal":2.4,"ano":"2011-01-01"},{"Proporcaodemenoresde5":9.3,"esperancadevidaaonascer":69.4,"esperancadevidaaos60":19.8,"graudeurbanizacao":58.9,"proporcaodeidosos":10.4,"razaodedependencia":69.7,"razaodesexos":99.1,"taxadefecundidadetotal":2.34,"ano":"2012-01-01"},{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":69.7,"esperancadevidaaos60":19.9,"graudeurbanizacao":58.3,"proporcaodeidosos":10.7,"razaodedependencia":67.8,"razaodesexos":98.1,"taxadefecundidadetotal":2.28,"ano":"2013-01-01"},{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":70.0,"esperancadevidaaos60":20.0,"graudeurbanizacao":59.2,"proporcaodeidosos":11.2,"razaodedependencia":66.6,"razaodesexos":91.7,"taxadefecundidadetotal":2.22,"ano":"2014-01-01"},{"Proporcaodemenoresde5":8.5,"esperancadevidaaonascer":70.3,"esperancadevidaaos60":20.1,"graudeurbanizacao":59.6,"proporcaodeidosos":11.3,"razaodedependencia":66.8,"razaodesexos":97.8,"taxadefecundidadetotal":2.17,"ano":"2015-01-01"}];
var matogrosso = [{"Proporcaodemenoresde5":9.1,"esperancadevidaaonascer":70.8,"esperancadevidaaos60":19.4,"graudeurbanizacao":76.8,"proporcaodeidosos":6.6,"razaodedependencia":55.9,"razaodesexos":100.0,"taxadefecundidadetotal":2.25,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":71.1,"esperancadevidaaos60":19.6,"graudeurbanizacao":76.8,"proporcaodeidosos":6.7,"razaodedependencia":53.7,"razaodesexos":102.6,"taxadefecundidadetotal":2.21,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":71.5,"esperancadevidaaos60":19.8,"graudeurbanizacao":76.6,"proporcaodeidosos":7.9,"razaodedependencia":56.1,"razaodesexos":102.9,"taxadefecundidadetotal":2.16,"ano":"2006-01-01"},{"Proporcaodemenoresde5":9.0,"esperancadevidaaonascer":71.8,"esperancadevidaaos60":20.0,"graudeurbanizacao":75.9,"proporcaodeidosos":7.5,"razaodedependencia":55.4,"razaodesexos":104.1,"taxadefecundidadetotal":2.12,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":72.1,"esperancadevidaaos60":20.2,"graudeurbanizacao":79.9,"proporcaodeidosos":8.1,"razaodedependencia":50.9,"razaodesexos":104.1,"taxadefecundidadetotal":2.08,"ano":"2008-01-01"},{"Proporcaodemenoresde5":8.2,"esperancadevidaaonascer":72.4,"esperancadevidaaos60":20.3,"graudeurbanizacao":81.9,"proporcaodeidosos":9.2,"razaodedependencia":52.6,"razaodesexos":100.6,"taxadefecundidadetotal":2.05,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":72.9,"esperancadevidaaos60":20.6,"graudeurbanizacao":84.4,"proporcaodeidosos":9.2,"razaodedependencia":50.0,"razaodesexos":103.1,"taxadefecundidadetotal":1.98,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":73.2,"esperancadevidaaos60":20.8,"graudeurbanizacao":83.5,"proporcaodeidosos":9.9,"razaodedependencia":53.9,"razaodesexos":102.2,"taxadefecundidadetotal":1.94,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":73.5,"esperancadevidaaos60":20.9,"graudeurbanizacao":82.5,"proporcaodeidosos":10.7,"razaodedependencia":50.2,"razaodesexos":99.9,"taxadefecundidadetotal":1.91,"ano":"2013-01-01"},{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":73.7,"esperancadevidaaos60":21.1,"graudeurbanizacao":82.8,"proporcaodeidosos":10.6,"razaodedependencia":52.0,"razaodesexos":102.8,"taxadefecundidadetotal":1.88,"ano":"2014-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":74.0,"esperancadevidaaos60":21.2,"graudeurbanizacao":81.7,"proporcaodeidosos":11.4,"razaodedependencia":53.5,"razaodesexos":101.8,"taxadefecundidadetotal":1.85,"ano":"2015-01-01"}];
var matogrossodosul = [{"Proporcaodemenoresde5":8.5,"esperancadevidaaonascer":71.7,"esperancadevidaaos60":19.9,"graudeurbanizacao":85.4,"proporcaodeidosos":8.2,"razaodedependencia":57.1,"razaodesexos":95.6,"taxadefecundidadetotal":2.24,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":72.1,"esperancadevidaaos60":20.1,"graudeurbanizacao":84.8,"proporcaodeidosos":9.0,"razaodedependencia":56.1,"razaodesexos":95.6,"taxadefecundidadetotal":2.2,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":72.5,"esperancadevidaaos60":20.3,"graudeurbanizacao":84.7,"proporcaodeidosos":8.7,"razaodedependencia":55.5,"razaodesexos":99.2,"taxadefecundidadetotal":2.17,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":72.8,"esperancadevidaaos60":20.5,"graudeurbanizacao":85.9,"proporcaodeidosos":10.3,"razaodedependencia":56.2,"razaodesexos":98.5,"taxadefecundidadetotal":2.13,"ano":"2007-01-01"},{"Proporcaodemenoresde5":8.2,"esperancadevidaaonascer":73.2,"esperancadevidaaos60":20.7,"graudeurbanizacao":85.5,"proporcaodeidosos":9.8,"razaodedependencia":56.5,"razaodesexos":95.4,"taxadefecundidadetotal":2.09,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.8,"esperancadevidaaonascer":73.5,"esperancadevidaaos60":20.9,"graudeurbanizacao":85.6,"proporcaodeidosos":10.3,"razaodedependencia":56.3,"razaodesexos":98.3,"taxadefecundidadetotal":2.05,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":74.1,"esperancadevidaaos60":21.3,"graudeurbanizacao":89.6,"proporcaodeidosos":10.7,"razaodedependencia":52.7,"razaodesexos":95.6,"taxadefecundidadetotal":1.99,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":74.4,"esperancadevidaaos60":21.4,"graudeurbanizacao":89.0,"proporcaodeidosos":11.2,"razaodedependencia":50.4,"razaodesexos":98.8,"taxadefecundidadetotal":1.95,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":74.7,"esperancadevidaaos60":21.6,"graudeurbanizacao":89.7,"proporcaodeidosos":11.8,"razaodedependencia":53.4,"razaodesexos":97.8,"taxadefecundidadetotal":1.92,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":75.0,"esperancadevidaaos60":21.7,"graudeurbanizacao":89.2,"proporcaodeidosos":12.1,"razaodedependencia":54.0,"razaodesexos":97.5,"taxadefecundidadetotal":1.89,"ano":"2014-01-01"},{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":75.3,"esperancadevidaaos60":21.9,"graudeurbanizacao":89.2,"proporcaodeidosos":13.3,"razaodedependencia":54.4,"razaodesexos":97.6,"taxadefecundidadetotal":1.86,"ano":"2015-01-01"}];
var minasgerais = [{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":73.4,"esperancadevidaaos60":21.0,"graudeurbanizacao":84.8,"proporcaodeidosos":10.3,"razaodedependencia":57.0,"razaodesexos":95.4,"taxadefecundidadetotal":1.97,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":73.8,"esperancadevidaaos60":21.2,"graudeurbanizacao":84.5,"proporcaodeidosos":10.5,"razaodedependencia":55.0,"razaodesexos":96.5,"taxadefecundidadetotal":1.92,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":74.1,"esperancadevidaaos60":21.4,"graudeurbanizacao":84.5,"proporcaodeidosos":11.0,"razaodedependencia":55.8,"razaodesexos":93.7,"taxadefecundidadetotal":1.87,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":74.5,"esperancadevidaaos60":21.6,"graudeurbanizacao":84.7,"proporcaodeidosos":11.1,"razaodedependencia":55.2,"razaodesexos":96.5,"taxadefecundidadetotal":1.83,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.5,"esperancadevidaaonascer":74.8,"esperancadevidaaos60":21.8,"graudeurbanizacao":85.5,"proporcaodeidosos":11.7,"razaodedependencia":54.0,"razaodesexos":94.5,"taxadefecundidadetotal":1.79,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":75.2,"esperancadevidaaos60":22.0,"graudeurbanizacao":85.6,"proporcaodeidosos":12.2,"razaodedependencia":53.6,"razaodesexos":94.4,"taxadefecundidadetotal":1.75,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":75.8,"esperancadevidaaos60":22.3,"graudeurbanizacao":84.5,"proporcaodeidosos":13.1,"razaodedependencia":53.7,"razaodesexos":94.8,"taxadefecundidadetotal":1.69,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":76.1,"esperancadevidaaos60":22.5,"graudeurbanizacao":84.5,"proporcaodeidosos":13.0,"razaodedependencia":52.8,"razaodesexos":96.8,"taxadefecundidadetotal":1.66,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":76.4,"esperancadevidaaos60":22.6,"graudeurbanizacao":84.5,"proporcaodeidosos":13.5,"razaodedependencia":52.5,"razaodesexos":95.1,"taxadefecundidadetotal":1.63,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":76.7,"esperancadevidaaos60":22.7,"graudeurbanizacao":84.6,"proporcaodeidosos":14.2,"razaodedependencia":52.6,"razaodesexos":95.1,"taxadefecundidadetotal":1.61,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":77.0,"esperancadevidaaos60":22.9,"graudeurbanizacao":84.0,"proporcaodeidosos":15.1,"razaodedependencia":52.6,"razaodesexos":97.0,"taxadefecundidadetotal":1.59,"ano":"2015-01-01"}];
var nordeste = [{"Proporcaodemenoresde5":9.4,"esperancadevidaaonascer":69.0,"esperancadevidaaos60":19.3,"graudeurbanizacao":71.6,"proporcaodeidosos":9.3,"razaodedependencia":64.9,"razaodesexos":95.4,"taxadefecundidadetotal":2.39,"ano":"2004-01-01"},{"Proporcaodemenoresde5":9.1,"esperancadevidaaonascer":69.4,"esperancadevidaaos60":19.5,"graudeurbanizacao":70.8,"proporcaodeidosos":9.3,"razaodedependencia":63.5,"razaodesexos":95.8,"taxadefecundidadetotal":2.31,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":69.8,"esperancadevidaaos60":19.6,"graudeurbanizacao":71.5,"proporcaodeidosos":9.6,"razaodedependencia":63.4,"razaodesexos":95.9,"taxadefecundidadetotal":2.25,"ano":"2006-01-01"},{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":70.2,"esperancadevidaaos60":19.8,"graudeurbanizacao":71.8,"proporcaodeidosos":9.8,"razaodedependencia":62.0,"razaodesexos":95.4,"taxadefecundidadetotal":2.18,"ano":"2007-01-01"},{"Proporcaodemenoresde5":8.2,"esperancadevidaaonascer":70.5,"esperancadevidaaos60":20.0,"graudeurbanizacao":72.4,"proporcaodeidosos":10.1,"razaodedependencia":61.1,"razaodesexos":95.9,"taxadefecundidadetotal":2.12,"ano":"2008-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":70.9,"esperancadevidaaos60":20.1,"graudeurbanizacao":72.8,"proporcaodeidosos":10.4,"razaodedependencia":60.2,"razaodesexos":94.9,"taxadefecundidadetotal":2.07,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":71.6,"esperancadevidaaos60":20.4,"graudeurbanizacao":73.7,"proporcaodeidosos":11.4,"razaodedependencia":59.7,"razaodesexos":93.3,"taxadefecundidadetotal":1.97,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":71.9,"esperancadevidaaos60":20.6,"graudeurbanizacao":73.4,"proporcaodeidosos":11.9,"razaodedependencia":59.0,"razaodesexos":94.1,"taxadefecundidadetotal":1.93,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":72.2,"esperancadevidaaos60":20.7,"graudeurbanizacao":73.3,"proporcaodeidosos":12.4,"razaodedependencia":58.9,"razaodesexos":93.8,"taxadefecundidadetotal":1.89,"ano":"2013-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":72.5,"esperancadevidaaos60":20.8,"graudeurbanizacao":73.7,"proporcaodeidosos":12.9,"razaodedependencia":57.9,"razaodesexos":92.9,"taxadefecundidadetotal":1.85,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":72.8,"esperancadevidaaos60":21.0,"graudeurbanizacao":73.1,"proporcaodeidosos":13.4,"razaodedependencia":58.3,"razaodesexos":93.8,"taxadefecundidadetotal":1.82,"ano":"2015-01-01"}];
var norte = [{"Proporcaodemenoresde5":11.0,"esperancadevidaaonascer":69.1,"esperancadevidaaos60":18.6,"graudeurbanizacao":71.0,"proporcaodeidosos":6.2,"razaodedependencia":68.0,"razaodesexos":101.9,"taxadefecundidadetotal":2.84,"ano":"2004-01-01"},{"Proporcaodemenoresde5":10.6,"esperancadevidaaonascer":69.4,"esperancadevidaaos60":18.8,"graudeurbanizacao":71.3,"proporcaodeidosos":6.2,"razaodedependencia":66.9,"razaodesexos":98.8,"taxadefecundidadetotal":2.77,"ano":"2005-01-01"},{"Proporcaodemenoresde5":10.4,"esperancadevidaaonascer":69.7,"esperancadevidaaos60":19.0,"graudeurbanizacao":71.9,"proporcaodeidosos":6.4,"razaodedependencia":65.7,"razaodesexos":101.5,"taxadefecundidadetotal":2.69,"ano":"2006-01-01"},{"Proporcaodemenoresde5":10.2,"esperancadevidaaonascer":70.0,"esperancadevidaaos60":19.2,"graudeurbanizacao":72.2,"proporcaodeidosos":6.8,"razaodedependencia":65.5,"razaodesexos":100.4,"taxadefecundidadetotal":2.61,"ano":"2007-01-01"},{"Proporcaodemenoresde5":9.4,"esperancadevidaaonascer":70.3,"esperancadevidaaos60":19.4,"graudeurbanizacao":72.6,"proporcaodeidosos":7.0,"razaodedependencia":62.9,"razaodesexos":100.9,"taxadefecundidadetotal":2.54,"ano":"2008-01-01"},{"Proporcaodemenoresde5":9.5,"esperancadevidaaonascer":70.5,"esperancadevidaaos60":19.6,"graudeurbanizacao":72.9,"proporcaodeidosos":7.4,"razaodedependencia":62.5,"razaodesexos":100.0,"taxadefecundidadetotal":2.47,"ano":"2009-01-01"},{"Proporcaodemenoresde5":8.9,"esperancadevidaaonascer":71.0,"esperancadevidaaos60":19.9,"graudeurbanizacao":74.7,"proporcaodeidosos":7.9,"razaodedependencia":60.2,"razaodesexos":100.6,"taxadefecundidadetotal":2.34,"ano":"2011-01-01"},{"Proporcaodemenoresde5":8.9,"esperancadevidaaonascer":71.3,"esperancadevidaaos60":20.0,"graudeurbanizacao":75.4,"proporcaodeidosos":8.1,"razaodedependencia":60.1,"razaodesexos":101.4,"taxadefecundidadetotal":2.28,"ano":"2012-01-01"},{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":71.5,"esperancadevidaaos60":20.1,"graudeurbanizacao":74.6,"proporcaodeidosos":8.9,"razaodedependencia":59.5,"razaodesexos":100.5,"taxadefecundidadetotal":2.22,"ano":"2013-01-01"},{"Proporcaodemenoresde5":8.4,"esperancadevidaaonascer":71.8,"esperancadevidaaos60":20.2,"graudeurbanizacao":75.9,"proporcaodeidosos":9.1,"razaodedependencia":58.8,"razaodesexos":100.4,"taxadefecundidadetotal":2.16,"ano":"2014-01-01"},{"Proporcaodemenoresde5":7.8,"esperancadevidaaonascer":72.0,"esperancadevidaaos60":20.3,"graudeurbanizacao":75.0,"proporcaodeidosos":10.1,"razaodedependencia":58.2,"razaodesexos":101.6,"taxadefecundidadetotal":2.11,"ano":"2015-01-01"}];
var para = [{"Proporcaodemenoresde5":11.1,"esperancadevidaaonascer":69.5,"esperancadevidaaos60":18.7,"graudeurbanizacao":67.3,"proporcaodeidosos":6.5,"razaodedependencia":69.2,"razaodesexos":102.7,"taxadefecundidadetotal":2.82,"ano":"2004-01-01"},{"Proporcaodemenoresde5":10.9,"esperancadevidaaonascer":69.7,"esperancadevidaaos60":18.9,"graudeurbanizacao":67.5,"proporcaodeidosos":6.4,"razaodedependencia":68.6,"razaodesexos":96.4,"taxadefecundidadetotal":2.74,"ano":"2005-01-01"},{"Proporcaodemenoresde5":10.5,"esperancadevidaaonascer":69.9,"esperancadevidaaos60":19.1,"graudeurbanizacao":67.7,"proporcaodeidosos":6.6,"razaodedependencia":67.6,"razaodesexos":100.1,"taxadefecundidadetotal":2.66,"ano":"2006-01-01"},{"Proporcaodemenoresde5":10.1,"esperancadevidaaonascer":70.2,"esperancadevidaaos60":19.3,"graudeurbanizacao":67.9,"proporcaodeidosos":7.1,"razaodedependencia":65.2,"razaodesexos":101.2,"taxadefecundidadetotal":2.59,"ano":"2007-01-01"},{"Proporcaodemenoresde5":9.3,"esperancadevidaaonascer":70.4,"esperancadevidaaos60":19.5,"graudeurbanizacao":68.1,"proporcaodeidosos":7.4,"razaodedependencia":63.5,"razaodesexos":100.9,"taxadefecundidadetotal":2.52,"ano":"2008-01-01"},{"Proporcaodemenoresde5":10.1,"esperancadevidaaonascer":70.6,"esperancadevidaaos60":19.7,"graudeurbanizacao":68.3,"proporcaodeidosos":7.4,"razaodedependencia":64.5,"razaodesexos":99.6,"taxadefecundidadetotal":2.45,"ano":"2009-01-01"},{"Proporcaodemenoresde5":8.9,"esperancadevidaaonascer":71.1,"esperancadevidaaos60":19.9,"graudeurbanizacao":69.6,"proporcaodeidosos":8.2,"razaodedependencia":60.1,"razaodesexos":100.9,"taxadefecundidadetotal":2.32,"ano":"2011-01-01"},{"Proporcaodemenoresde5":8.8,"esperancadevidaaonascer":71.3,"esperancadevidaaos60":20.0,"graudeurbanizacao":69.9,"proporcaodeidosos":8.5,"razaodedependencia":60.0,"razaodesexos":101.8,"taxadefecundidadetotal":2.26,"ano":"2012-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":71.5,"esperancadevidaaos60":20.1,"graudeurbanizacao":68.9,"proporcaodeidosos":9.6,"razaodedependencia":60.3,"razaodesexos":100.7,"taxadefecundidadetotal":2.2,"ano":"2013-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":71.7,"esperancadevidaaos60":20.2,"graudeurbanizacao":70.1,"proporcaodeidosos":9.8,"razaodedependencia":60.3,"razaodesexos":101.3,"taxadefecundidadetotal":2.15,"ano":"2014-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":71.9,"esperancadevidaaos60":20.3,"graudeurbanizacao":68.5,"proporcaodeidosos":10.6,"razaodedependencia":58.1,"razaodesexos":101.5,"taxadefecundidadetotal":2.1,"ano":"2015-01-01"}];
var paraiba = [{"Proporcaodemenoresde5":9.0,"esperancadevidaaonascer":68.8,"esperancadevidaaos60":19.2,"graudeurbanizacao":75.8,"proporcaodeidosos":10.2,"razaodedependencia":66.5,"razaodesexos":95.7,"taxadefecundidadetotal":2.27,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.9,"esperancadevidaaonascer":69.3,"esperancadevidaaos60":19.4,"graudeurbanizacao":77.5,"proporcaodeidosos":10.1,"razaodedependencia":62.7,"razaodesexos":95.0,"taxadefecundidadetotal":2.21,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.2,"esperancadevidaaonascer":69.7,"esperancadevidaaos60":19.5,"graudeurbanizacao":76.3,"proporcaodeidosos":10.8,"razaodedependencia":61.4,"razaodesexos":96.0,"taxadefecundidadetotal":2.16,"ano":"2006-01-01"},{"Proporcaodemenoresde5":8.1,"esperancadevidaaonascer":70.1,"esperancadevidaaos60":19.7,"graudeurbanizacao":78.4,"proporcaodeidosos":11.2,"razaodedependencia":63.0,"razaodesexos":93.7,"taxadefecundidadetotal":2.11,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":70.5,"esperancadevidaaos60":19.9,"graudeurbanizacao":78.3,"proporcaodeidosos":11.6,"razaodedependencia":60.1,"razaodesexos":93.1,"taxadefecundidadetotal":2.06,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.8,"esperancadevidaaonascer":70.9,"esperancadevidaaos60":20.1,"graudeurbanizacao":77.8,"proporcaodeidosos":11.5,"razaodedependencia":60.8,"razaodesexos":94.5,"taxadefecundidadetotal":2.01,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":71.6,"esperancadevidaaos60":20.4,"graudeurbanizacao":81.4,"proporcaodeidosos":13.1,"razaodedependencia":56.4,"razaodesexos":90.0,"taxadefecundidadetotal":1.93,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":71.9,"esperancadevidaaos60":20.6,"graudeurbanizacao":80.6,"proporcaodeidosos":12.9,"razaodedependencia":58.0,"razaodesexos":90.6,"taxadefecundidadetotal":1.89,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":72.3,"esperancadevidaaos60":20.7,"graudeurbanizacao":79.6,"proporcaodeidosos":12.9,"razaodedependencia":57.6,"razaodesexos":90.7,"taxadefecundidadetotal":1.85,"ano":"2013-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":72.6,"esperancadevidaaos60":20.8,"graudeurbanizacao":81.6,"proporcaodeidosos":13.2,"razaodedependencia":58.0,"razaodesexos":92.9,"taxadefecundidadetotal":1.82,"ano":"2014-01-01"},{"Proporcaodemenoresde5":7.0,"esperancadevidaaonascer":72.9,"esperancadevidaaos60":21.0,"graudeurbanizacao":80.0,"proporcaodeidosos":13.5,"razaodedependencia":57.0,"razaodesexos":90.8,"taxadefecundidadetotal":1.79,"ano":"2015-01-01"}];
var parana = [{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":72.9,"esperancadevidaaos60":19.9,"graudeurbanizacao":83.5,"proporcaodeidosos":9.7,"razaodedependencia":54.9,"razaodesexos":96.7,"taxadefecundidadetotal":2.0,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":73.3,"esperancadevidaaos60":20.1,"graudeurbanizacao":83.8,"proporcaodeidosos":9.9,"razaodedependencia":55.6,"razaodesexos":96.0,"taxadefecundidadetotal":1.96,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":73.7,"esperancadevidaaos60":20.4,"graudeurbanizacao":84.4,"proporcaodeidosos":9.8,"razaodedependencia":53.5,"razaodesexos":94.3,"taxadefecundidadetotal":1.91,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.7,"esperancadevidaaonascer":74.1,"esperancadevidaaos60":20.7,"graudeurbanizacao":84.6,"proporcaodeidosos":10.5,"razaodedependencia":54.0,"razaodesexos":95.6,"taxadefecundidadetotal":1.87,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":74.4,"esperancadevidaaos60":20.9,"graudeurbanizacao":84.8,"proporcaodeidosos":11.1,"razaodedependencia":54.3,"razaodesexos":94.1,"taxadefecundidadetotal":1.83,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":74.8,"esperancadevidaaos60":21.2,"graudeurbanizacao":85.1,"proporcaodeidosos":11.5,"razaodedependencia":52.9,"razaodesexos":94.0,"taxadefecundidadetotal":1.8,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.3,"esperancadevidaaonascer":75.5,"esperancadevidaaos60":21.6,"graudeurbanizacao":86.8,"proporcaodeidosos":12.2,"razaodedependencia":51.0,"razaodesexos":96.0,"taxadefecundidadetotal":1.73,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":75.8,"esperancadevidaaos60":21.8,"graudeurbanizacao":86.8,"proporcaodeidosos":12.9,"razaodedependencia":52.2,"razaodesexos":95.7,"taxadefecundidadetotal":1.7,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":76.2,"esperancadevidaaos60":22.0,"graudeurbanizacao":87.5,"proporcaodeidosos":12.7,"razaodedependencia":50.5,"razaodesexos":95.5,"taxadefecundidadetotal":1.68,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":76.5,"esperancadevidaaos60":22.2,"graudeurbanizacao":87.5,"proporcaodeidosos":13.7,"razaodedependencia":52.7,"razaodesexos":95.4,"taxadefecundidadetotal":1.65,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":76.8,"esperancadevidaaos60":22.3,"graudeurbanizacao":87.4,"proporcaodeidosos":14.6,"razaodedependencia":52.5,"razaodesexos":96.3,"taxadefecundidadetotal":1.63,"ano":"2015-01-01"}];
var pernambuco = [{"Proporcaodemenoresde5":9.5,"esperancadevidaaonascer":67.6,"esperancadevidaaos60":18.6,"graudeurbanizacao":75.2,"proporcaodeidosos":9.4,"razaodedependencia":64.0,"razaodesexos":90.9,"taxadefecundidadetotal":2.27,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.8,"esperancadevidaaonascer":68.3,"esperancadevidaaos60":18.8,"graudeurbanizacao":75.9,"proporcaodeidosos":9.2,"razaodedependencia":61.3,"razaodesexos":94.6,"taxadefecundidadetotal":2.21,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.8,"esperancadevidaaonascer":68.9,"esperancadevidaaos60":18.9,"graudeurbanizacao":76.5,"proporcaodeidosos":9.7,"razaodedependencia":63.1,"razaodesexos":92.0,"taxadefecundidadetotal":2.15,"ano":"2006-01-01"},{"Proporcaodemenoresde5":8.2,"esperancadevidaaonascer":69.5,"esperancadevidaaos60":19.1,"graudeurbanizacao":75.4,"proporcaodeidosos":9.8,"razaodedependencia":59.5,"razaodesexos":93.7,"taxadefecundidadetotal":2.09,"ano":"2007-01-01"},{"Proporcaodemenoresde5":8.2,"esperancadevidaaonascer":70.1,"esperancadevidaaos60":19.3,"graudeurbanizacao":76.1,"proporcaodeidosos":10.1,"razaodedependencia":60.6,"razaodesexos":93.6,"taxadefecundidadetotal":2.04,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":70.6,"esperancadevidaaos60":19.5,"graudeurbanizacao":77.0,"proporcaodeidosos":10.9,"razaodedependencia":59.6,"razaodesexos":91.8,"taxadefecundidadetotal":1.99,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":71.6,"esperancadevidaaos60":19.9,"graudeurbanizacao":82.4,"proporcaodeidosos":11.7,"razaodedependencia":57.1,"razaodesexos":91.9,"taxadefecundidadetotal":1.9,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.0,"esperancadevidaaonascer":72.1,"esperancadevidaaos60":20.1,"graudeurbanizacao":81.2,"proporcaodeidosos":12.4,"razaodedependencia":58.5,"razaodesexos":91.8,"taxadefecundidadetotal":1.86,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":72.6,"esperancadevidaaos60":20.3,"graudeurbanizacao":81.6,"proporcaodeidosos":13.5,"razaodedependencia":58.2,"razaodesexos":90.4,"taxadefecundidadetotal":1.83,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.9,"esperancadevidaaonascer":73.1,"esperancadevidaaos60":20.5,"graudeurbanizacao":81.1,"proporcaodeidosos":14.2,"razaodedependencia":58.9,"razaodesexos":91.3,"taxadefecundidadetotal":1.8,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":73.5,"esperancadevidaaos60":20.8,"graudeurbanizacao":79.8,"proporcaodeidosos":14.8,"razaodedependencia":58.1,"razaodesexos":91.6,"taxadefecundidadetotal":1.77,"ano":"2015-01-01"}];
var piaui = [{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":68.7,"esperancadevidaaos60":18.0,"graudeurbanizacao":62.4,"proporcaodeidosos":10.8,"razaodedependencia":65.9,"razaodesexos":95.8,"taxadefecundidadetotal":2.36,"ano":"2004-01-01"},{"Proporcaodemenoresde5":9.0,"esperancadevidaaonascer":68.9,"esperancadevidaaos60":18.1,"graudeurbanizacao":61.8,"proporcaodeidosos":10.2,"razaodedependencia":65.8,"razaodesexos":92.0,"taxadefecundidadetotal":2.28,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.1,"esperancadevidaaonascer":69.1,"esperancadevidaaos60":18.2,"graudeurbanizacao":60.7,"proporcaodeidosos":10.2,"razaodedependencia":63.8,"razaodesexos":94.4,"taxadefecundidadetotal":2.21,"ano":"2006-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":69.3,"esperancadevidaaos60":18.5,"graudeurbanizacao":62.1,"proporcaodeidosos":10.7,"razaodedependencia":61.2,"razaodesexos":95.0,"taxadefecundidadetotal":2.14,"ano":"2007-01-01"},{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":69.5,"esperancadevidaaos60":18.7,"graudeurbanizacao":62.8,"proporcaodeidosos":11.0,"razaodedependencia":61.3,"razaodesexos":97.0,"taxadefecundidadetotal":2.08,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":69.7,"esperancadevidaaos60":19.0,"graudeurbanizacao":61.9,"proporcaodeidosos":11.4,"razaodedependencia":62.8,"razaodesexos":93.5,"taxadefecundidadetotal":2.02,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.8,"esperancadevidaaonascer":70.1,"esperancadevidaaos60":19.3,"graudeurbanizacao":66.5,"proporcaodeidosos":11.5,"razaodedependencia":63.5,"razaodesexos":95.6,"taxadefecundidadetotal":1.92,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.8,"esperancadevidaaonascer":70.3,"esperancadevidaaos60":19.4,"graudeurbanizacao":67.0,"proporcaodeidosos":12.2,"razaodedependencia":59.0,"razaodesexos":91.8,"taxadefecundidadetotal":1.87,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":70.5,"esperancadevidaaos60":19.5,"graudeurbanizacao":68.4,"proporcaodeidosos":12.0,"razaodedependencia":60.3,"razaodesexos":94.7,"taxadefecundidadetotal":1.83,"ano":"2013-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":70.7,"esperancadevidaaos60":19.5,"graudeurbanizacao":67.5,"proporcaodeidosos":12.6,"razaodedependencia":57.6,"razaodesexos":93.7,"taxadefecundidadetotal":1.8,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":70.9,"esperancadevidaaos60":19.6,"graudeurbanizacao":67.1,"proporcaodeidosos":12.1,"razaodedependencia":57.3,"razaodesexos":96.2,"taxadefecundidadetotal":1.77,"ano":"2015-01-01"}];
var rmbelem = [{"Proporcaodemenoresde5":8.6,"graudeurbanizacao":97.0,"proporcaodeidosos":7.5,"razaodedependencia":54.4,"razaodesexos":91.9,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.3,"graudeurbanizacao":97.0,"proporcaodeidosos":7.1,"razaodedependencia":54.0,"razaodesexos":88.3,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.2,"graudeurbanizacao":97.0,"proporcaodeidosos":7.7,"razaodedependencia":53.3,"razaodesexos":90.7,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.6,"graudeurbanizacao":97.0,"proporcaodeidosos":8.0,"razaodedependencia":51.3,"razaodesexos":89.3,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.8,"graudeurbanizacao":96.9,"proporcaodeidosos":7.8,"razaodedependencia":51.7,"razaodesexos":91.7,"ano":"2008-01-01"},{"Proporcaodemenoresde5":8.0,"graudeurbanizacao":96.9,"proporcaodeidosos":8.6,"razaodedependencia":52.3,"razaodesexos":90.8,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.0,"graudeurbanizacao":96.8,"proporcaodeidosos":9.7,"razaodedependencia":49.4,"razaodesexos":90.5,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.8,"graudeurbanizacao":97.3,"proporcaodeidosos":10.1,"razaodedependencia":49.9,"razaodesexos":92.5,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.8,"graudeurbanizacao":97.2,"proporcaodeidosos":10.7,"razaodedependencia":49.9,"razaodesexos":88.9,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":96.7,"proporcaodeidosos":11.6,"razaodedependencia":49.0,"razaodesexos":91.0,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.1,"graudeurbanizacao":96.2,"proporcaodeidosos":11.8,"razaodedependencia":48.0,"razaodesexos":93.3,"ano":"2015-01-01"}];
var rmbelohorizonte = [{"Proporcaodemenoresde5":7.3,"graudeurbanizacao":98.9,"proporcaodeidosos":9.1,"razaodedependencia":50.6,"razaodesexos":92.6,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.7,"graudeurbanizacao":98.7,"proporcaodeidosos":9.2,"razaodedependencia":50.8,"razaodesexos":94.6,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.0,"graudeurbanizacao":98.7,"proporcaodeidosos":9.2,"razaodedependencia":50.5,"razaodesexos":90.6,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":98.7,"proporcaodeidosos":10.0,"razaodedependencia":50.1,"razaodesexos":93.1,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":99.0,"proporcaodeidosos":10.8,"razaodedependencia":51.1,"razaodesexos":92.1,"ano":"2008-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":99.1,"proporcaodeidosos":11.1,"razaodedependencia":49.1,"razaodesexos":89.2,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.0,"graudeurbanizacao":97.5,"proporcaodeidosos":11.8,"razaodedependencia":48.1,"razaodesexos":92.6,"ano":"2011-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":97.5,"proporcaodeidosos":11.6,"razaodedependencia":47.5,"razaodesexos":92.8,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.2,"graudeurbanizacao":97.7,"proporcaodeidosos":12.2,"razaodedependencia":48.4,"razaodesexos":92.1,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.1,"graudeurbanizacao":97.2,"proporcaodeidosos":13.3,"razaodedependencia":49.1,"razaodesexos":92.0,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.8,"graudeurbanizacao":97.0,"proporcaodeidosos":13.9,"razaodedependencia":48.9,"razaodesexos":92.4,"ano":"2015-01-01"}];
var rmcuritiba = [{"Proporcaodemenoresde5":7.4,"graudeurbanizacao":90.8,"proporcaodeidosos":8.6,"razaodedependencia":50.7,"razaodesexos":96.8,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.2,"graudeurbanizacao":90.6,"proporcaodeidosos":9.0,"razaodedependencia":51.8,"razaodesexos":93.0,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.0,"graudeurbanizacao":90.8,"proporcaodeidosos":9.1,"razaodedependencia":49.9,"razaodesexos":92.3,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.7,"graudeurbanizacao":90.4,"proporcaodeidosos":9.5,"razaodedependencia":49.7,"razaodesexos":95.3,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":90.7,"proporcaodeidosos":9.4,"razaodedependencia":49.3,"razaodesexos":91.6,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.5,"graudeurbanizacao":90.7,"proporcaodeidosos":11.1,"razaodedependencia":49.9,"razaodesexos":94.6,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.8,"graudeurbanizacao":92.6,"proporcaodeidosos":10.6,"razaodedependencia":47.7,"razaodesexos":95.2,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.6,"graudeurbanizacao":92.5,"proporcaodeidosos":11.5,"razaodedependencia":48.6,"razaodesexos":92.3,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.6,"graudeurbanizacao":92.6,"proporcaodeidosos":12.2,"razaodedependencia":48.7,"razaodesexos":93.8,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":93.0,"proporcaodeidosos":12.6,"razaodedependencia":49.4,"razaodesexos":95.0,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.6,"graudeurbanizacao":92.7,"proporcaodeidosos":13.9,"razaodedependencia":49.7,"razaodesexos":96.7,"ano":"2015-01-01"}];
var rmfortaleza = [{"Proporcaodemenoresde5":8.3,"graudeurbanizacao":97.5,"proporcaodeidosos":8.1,"razaodedependencia":55.7,"razaodesexos":88.8,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.2,"graudeurbanizacao":96.8,"proporcaodeidosos":8.1,"razaodedependencia":55.7,"razaodesexos":90.5,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.9,"graudeurbanizacao":97.1,"proporcaodeidosos":7.9,"razaodedependencia":54.5,"razaodesexos":90.3,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.5,"graudeurbanizacao":97.0,"proporcaodeidosos":8.9,"razaodedependencia":55.0,"razaodesexos":89.1,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.4,"graudeurbanizacao":97.1,"proporcaodeidosos":9.1,"razaodedependencia":51.8,"razaodesexos":90.3,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.6,"graudeurbanizacao":96.9,"proporcaodeidosos":8.9,"razaodedependencia":52.3,"razaodesexos":88.2,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.0,"graudeurbanizacao":95.9,"proporcaodeidosos":10.8,"razaodedependencia":51.4,"razaodesexos":89.9,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.7,"graudeurbanizacao":95.8,"proporcaodeidosos":11.4,"razaodedependencia":50.4,"razaodesexos":89.9,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":95.8,"proporcaodeidosos":11.4,"razaodedependencia":49.8,"razaodesexos":91.3,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":94.9,"proporcaodeidosos":12.1,"razaodedependencia":49.7,"razaodesexos":92.2,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.5,"graudeurbanizacao":95.1,"proporcaodeidosos":12.3,"razaodedependencia":50.6,"razaodesexos":92.3,"ano":"2015-01-01"}];
var rmportoalegre = [{"Proporcaodemenoresde5":7.1,"graudeurbanizacao":94.8,"proporcaodeidosos":10.6,"razaodedependencia":53.6,"razaodesexos":92.2,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.2,"graudeurbanizacao":94.8,"proporcaodeidosos":10.5,"razaodedependencia":52.8,"razaodesexos":91.9,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.2,"graudeurbanizacao":94.8,"proporcaodeidosos":10.8,"razaodedependencia":53.1,"razaodesexos":92.6,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.8,"graudeurbanizacao":94.6,"proporcaodeidosos":12.1,"razaodedependencia":53.3,"razaodesexos":93.3,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":94.1,"proporcaodeidosos":12.2,"razaodedependencia":52.4,"razaodesexos":91.4,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.2,"graudeurbanizacao":94.0,"proporcaodeidosos":12.5,"razaodedependencia":52.5,"razaodesexos":91.6,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.3,"graudeurbanizacao":97.0,"proporcaodeidosos":13.2,"razaodedependencia":51.6,"razaodesexos":89.4,"ano":"2011-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":96.7,"proporcaodeidosos":14.2,"razaodedependencia":52.2,"razaodesexos":91.1,"ano":"2012-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":96.6,"proporcaodeidosos":15.4,"razaodedependencia":54.2,"razaodesexos":91.5,"ano":"2013-01-01"},{"Proporcaodemenoresde5":5.7,"graudeurbanizacao":96.7,"proporcaodeidosos":15.5,"razaodedependencia":50.6,"razaodesexos":90.2,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.7,"graudeurbanizacao":96.7,"proporcaodeidosos":16.0,"razaodedependencia":52.9,"razaodesexos":89.7,"ano":"2015-01-01"}];
var rmrecife = [{"Proporcaodemenoresde5":8.1,"graudeurbanizacao":97.3,"proporcaodeidosos":8.7,"razaodedependencia":53.3,"razaodesexos":87.4,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.7,"graudeurbanizacao":97.7,"proporcaodeidosos":8.8,"razaodedependencia":51.9,"razaodesexos":87.8,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.5,"graudeurbanizacao":97.6,"proporcaodeidosos":9.3,"razaodedependencia":51.7,"razaodesexos":88.5,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.1,"graudeurbanizacao":97.6,"proporcaodeidosos":9.9,"razaodedependencia":51.3,"razaodesexos":87.8,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.7,"graudeurbanizacao":97.4,"proporcaodeidosos":10.2,"razaodedependencia":51.5,"razaodesexos":89.8,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.6,"graudeurbanizacao":98.3,"proporcaodeidosos":11.0,"razaodedependencia":50.2,"razaodesexos":85.0,"ano":"2009-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":98.3,"proporcaodeidosos":12.3,"razaodedependencia":50.1,"razaodesexos":87.6,"ano":"2011-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":97.5,"proporcaodeidosos":13.0,"razaodedependencia":51.5,"razaodesexos":88.7,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.3,"graudeurbanizacao":97.4,"proporcaodeidosos":13.7,"razaodedependencia":52.5,"razaodesexos":86.8,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.5,"graudeurbanizacao":97.5,"proporcaodeidosos":14.3,"razaodedependencia":53.4,"razaodesexos":87.4,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.5,"graudeurbanizacao":97.4,"proporcaodeidosos":15.8,"razaodedependencia":54.0,"razaodesexos":85.3,"ano":"2015-01-01"}];
var rmriodejaneiro = [{"Proporcaodemenoresde5":6.6,"graudeurbanizacao":99.4,"proporcaodeidosos":13.8,"razaodedependencia":55.8,"razaodesexos":87.9,"ano":"2004-01-01"},{"Proporcaodemenoresde5":6.0,"graudeurbanizacao":99.3,"proporcaodeidosos":13.9,"razaodedependencia":54.6,"razaodesexos":88.9,"ano":"2005-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":99.3,"proporcaodeidosos":14.4,"razaodedependencia":53.0,"razaodesexos":86.4,"ano":"2006-01-01"},{"Proporcaodemenoresde5":5.6,"graudeurbanizacao":99.3,"proporcaodeidosos":14.7,"razaodedependencia":54.3,"razaodesexos":88.5,"ano":"2007-01-01"},{"Proporcaodemenoresde5":5.6,"graudeurbanizacao":99.4,"proporcaodeidosos":15.5,"razaodedependencia":54.6,"razaodesexos":87.4,"ano":"2008-01-01"},{"Proporcaodemenoresde5":5.2,"graudeurbanizacao":99.3,"proporcaodeidosos":15.4,"razaodedependencia":54.1,"razaodesexos":87.4,"ano":"2009-01-01"},{"Proporcaodemenoresde5":5.4,"graudeurbanizacao":99.8,"proporcaodeidosos":15.6,"razaodedependencia":54.0,"razaodesexos":86.0,"ano":"2011-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":99.5,"proporcaodeidosos":16.5,"razaodedependencia":56.9,"razaodesexos":89.2,"ano":"2012-01-01"},{"Proporcaodemenoresde5":5.4,"graudeurbanizacao":99.6,"proporcaodeidosos":16.7,"razaodedependencia":53.6,"razaodesexos":86.5,"ano":"2013-01-01"},{"Proporcaodemenoresde5":5.7,"graudeurbanizacao":99.7,"proporcaodeidosos":18.1,"razaodedependencia":56.9,"razaodesexos":86.1,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.6,"graudeurbanizacao":99.8,"proporcaodeidosos":17.6,"razaodedependencia":55.3,"razaodesexos":88.2,"ano":"2015-01-01"}];
var rmsalvador = [{"Proporcaodemenoresde5":8.3,"graudeurbanizacao":98.2,"proporcaodeidosos":7.0,"razaodedependencia":48.8,"razaodesexos":89.8,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.7,"graudeurbanizacao":98.3,"proporcaodeidosos":6.8,"razaodedependencia":48.1,"razaodesexos":91.0,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.1,"graudeurbanizacao":98.2,"proporcaodeidosos":7.3,"razaodedependencia":45.8,"razaodesexos":88.0,"ano":"2006-01-01"},{"Proporcaodemenoresde5":7.1,"graudeurbanizacao":98.4,"proporcaodeidosos":7.3,"razaodedependencia":45.4,"razaodesexos":90.7,"ano":"2007-01-01"},{"Proporcaodemenoresde5":7.0,"graudeurbanizacao":98.1,"proporcaodeidosos":8.1,"razaodedependencia":45.7,"razaodesexos":89.6,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.4,"graudeurbanizacao":98.1,"proporcaodeidosos":8.8,"razaodedependencia":45.9,"razaodesexos":88.3,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.5,"graudeurbanizacao":98.1,"proporcaodeidosos":9.5,"razaodedependencia":46.0,"razaodesexos":88.2,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.2,"graudeurbanizacao":98.3,"proporcaodeidosos":10.4,"razaodedependencia":46.5,"razaodesexos":90.1,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.1,"graudeurbanizacao":98.3,"proporcaodeidosos":10.4,"razaodedependencia":45.9,"razaodesexos":88.6,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.0,"graudeurbanizacao":98.2,"proporcaodeidosos":11.1,"razaodedependencia":45.4,"razaodesexos":85.6,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.6,"graudeurbanizacao":98.2,"proporcaodeidosos":11.7,"razaodedependencia":45.0,"razaodesexos":86.7,"ano":"2015-01-01"}];
var rmsaopaulo = [{"Proporcaodemenoresde5":7.6,"graudeurbanizacao":96.2,"proporcaodeidosos":9.5,"razaodedependencia":51.5,"razaodesexos":90.2,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.2,"graudeurbanizacao":95.9,"proporcaodeidosos":9.7,"razaodedependencia":49.7,"razaodesexos":89.9,"ano":"2005-01-01"},{"Proporcaodemenoresde5":6.7,"graudeurbanizacao":95.6,"proporcaodeidosos":10.2,"razaodedependencia":50.3,"razaodesexos":92.4,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.3,"graudeurbanizacao":96.2,"proporcaodeidosos":10.6,"razaodedependencia":50.2,"razaodesexos":91.0,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.1,"graudeurbanizacao":95.5,"proporcaodeidosos":11.4,"razaodedependencia":49.4,"razaodesexos":90.7,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.5,"graudeurbanizacao":95.7,"proporcaodeidosos":11.3,"razaodedependencia":50.1,"razaodesexos":93.0,"ano":"2009-01-01"},{"Proporcaodemenoresde5":5.9,"graudeurbanizacao":98.9,"proporcaodeidosos":12.3,"razaodedependencia":50.3,"razaodesexos":92.2,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.1,"graudeurbanizacao":98.9,"proporcaodeidosos":13.0,"razaodedependencia":51.3,"razaodesexos":90.0,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.1,"graudeurbanizacao":99.0,"proporcaodeidosos":13.2,"razaodedependencia":50.7,"razaodesexos":91.8,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.0,"graudeurbanizacao":98.8,"proporcaodeidosos":14.3,"razaodedependencia":51.0,"razaodesexos":90.4,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.7,"graudeurbanizacao":98.9,"proporcaodeidosos":14.7,"razaodedependencia":50.3,"razaodesexos":89.5,"ano":"2015-01-01"}];
var riograndedonorte = [{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":72.0,"esperancadevidaaos60":20.8,"graudeurbanizacao":74.0,"proporcaodeidosos":9.5,"razaodedependencia":59.6,"razaodesexos":97.0,"taxadefecundidadetotal":2.27,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.5,"esperancadevidaaonascer":72.4,"esperancadevidaaos60":21.0,"graudeurbanizacao":71.8,"proporcaodeidosos":9.9,"razaodedependencia":62.0,"razaodesexos":95.9,"taxadefecundidadetotal":2.2,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.2,"esperancadevidaaonascer":72.7,"esperancadevidaaos60":21.1,"graudeurbanizacao":72.4,"proporcaodeidosos":10.3,"razaodedependencia":59.4,"razaodesexos":95.8,"taxadefecundidadetotal":2.13,"ano":"2006-01-01"},{"Proporcaodemenoresde5":8.7,"esperancadevidaaonascer":73.1,"esperancadevidaaos60":21.2,"graudeurbanizacao":72.7,"proporcaodeidosos":9.3,"razaodedependencia":58.6,"razaodesexos":98.5,"taxadefecundidadetotal":2.07,"ano":"2007-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":73.4,"esperancadevidaaos60":21.3,"graudeurbanizacao":72.0,"proporcaodeidosos":10.6,"razaodedependencia":59.0,"razaodesexos":97.0,"taxadefecundidadetotal":2.01,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":73.8,"esperancadevidaaos60":21.5,"graudeurbanizacao":72.5,"proporcaodeidosos":10.4,"razaodedependencia":53.4,"razaodesexos":98.0,"taxadefecundidadetotal":1.96,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.7,"esperancadevidaaonascer":74.4,"esperancadevidaaos60":21.7,"graudeurbanizacao":78.7,"proporcaodeidosos":11.9,"razaodedependencia":55.4,"razaodesexos":92.7,"taxadefecundidadetotal":1.87,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.0,"esperancadevidaaonascer":74.7,"esperancadevidaaos60":21.8,"graudeurbanizacao":79.6,"proporcaodeidosos":11.7,"razaodedependencia":52.5,"razaodesexos":97.3,"taxadefecundidadetotal":1.83,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.9,"esperancadevidaaonascer":75.0,"esperancadevidaaos60":22.0,"graudeurbanizacao":78.6,"proporcaodeidosos":12.1,"razaodedependencia":52.5,"razaodesexos":97.1,"taxadefecundidadetotal":1.8,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.7,"esperancadevidaaonascer":75.2,"esperancadevidaaos60":22.1,"graudeurbanizacao":76.5,"proporcaodeidosos":11.8,"razaodedependencia":50.1,"razaodesexos":92.4,"taxadefecundidadetotal":1.77,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":75.5,"esperancadevidaaos60":22.2,"graudeurbanizacao":77.1,"proporcaodeidosos":12.6,"razaodedependencia":53.5,"razaodesexos":91.7,"taxadefecundidadetotal":1.74,"ano":"2015-01-01"}];
var riograndedosul = [{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":73.9,"esperancadevidaaos60":20.4,"graudeurbanizacao":80.8,"proporcaodeidosos":12.0,"razaodedependencia":56.1,"razaodesexos":95.4,"taxadefecundidadetotal":1.9,"ano":"2004-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":74.3,"esperancadevidaaos60":20.7,"graudeurbanizacao":81.2,"proporcaodeidosos":12.3,"razaodedependencia":55.7,"razaodesexos":94.5,"taxadefecundidadetotal":1.85,"ano":"2005-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":74.7,"esperancadevidaaos60":20.9,"graudeurbanizacao":81.5,"proporcaodeidosos":12.4,"razaodedependencia":55.8,"razaodesexos":93.8,"taxadefecundidadetotal":1.81,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":75.0,"esperancadevidaaos60":21.2,"graudeurbanizacao":81.2,"proporcaodeidosos":12.9,"razaodedependencia":54.5,"razaodesexos":94.8,"taxadefecundidadetotal":1.77,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":75.3,"esperancadevidaaos60":21.4,"graudeurbanizacao":81.4,"proporcaodeidosos":13.5,"razaodedependencia":54.8,"razaodesexos":94.5,"taxadefecundidadetotal":1.73,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":75.7,"esperancadevidaaos60":21.6,"graudeurbanizacao":82.0,"proporcaodeidosos":13.7,"razaodedependencia":53.8,"razaodesexos":94.8,"taxadefecundidadetotal":1.7,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":76.3,"esperancadevidaaos60":22.1,"graudeurbanizacao":84.4,"proporcaodeidosos":14.8,"razaodedependencia":55.0,"razaodesexos":93.5,"taxadefecundidadetotal":1.64,"ano":"2011-01-01"},{"Proporcaodemenoresde5":5.6,"esperancadevidaaonascer":76.6,"esperancadevidaaos60":22.2,"graudeurbanizacao":84.1,"proporcaodeidosos":16.1,"razaodedependencia":55.7,"razaodesexos":94.8,"taxadefecundidadetotal":1.62,"ano":"2012-01-01"},{"Proporcaodemenoresde5":5.5,"esperancadevidaaonascer":76.9,"esperancadevidaaos60":22.4,"graudeurbanizacao":84.0,"proporcaodeidosos":16.6,"razaodedependencia":56.5,"razaodesexos":93.8,"taxadefecundidadetotal":1.6,"ano":"2013-01-01"},{"Proporcaodemenoresde5":5.7,"esperancadevidaaonascer":77.2,"esperancadevidaaos60":22.6,"graudeurbanizacao":85.0,"proporcaodeidosos":17.2,"razaodedependencia":55.9,"razaodesexos":92.3,"taxadefecundidadetotal":1.58,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.7,"esperancadevidaaonascer":77.5,"esperancadevidaaos60":22.7,"graudeurbanizacao":85.0,"proporcaodeidosos":17.8,"razaodedependencia":56.3,"razaodesexos":93.6,"taxadefecundidadetotal":1.56,"ano":"2015-01-01"}];
var riodejaneiro = [{"Proporcaodemenoresde5":6.5,"esperancadevidaaonascer":71.8,"esperancadevidaaos60":20.0,"graudeurbanizacao":96.8,"proporcaodeidosos":13.3,"razaodedependencia":55.7,"razaodesexos":89.1,"taxadefecundidadetotal":1.87,"ano":"2004-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":72.2,"esperancadevidaaos60":20.2,"graudeurbanizacao":96.4,"proporcaodeidosos":13.5,"razaodedependencia":54.9,"razaodesexos":90.0,"taxadefecundidadetotal":1.84,"ano":"2005-01-01"},{"Proporcaodemenoresde5":5.9,"esperancadevidaaonascer":72.6,"esperancadevidaaos60":20.4,"graudeurbanizacao":96.7,"proporcaodeidosos":14.1,"razaodedependencia":53.4,"razaodesexos":88.5,"taxadefecundidadetotal":1.8,"ano":"2006-01-01"},{"Proporcaodemenoresde5":5.7,"esperancadevidaaonascer":73.0,"esperancadevidaaos60":20.6,"graudeurbanizacao":96.5,"proporcaodeidosos":14.0,"razaodedependencia":54.1,"razaodesexos":90.5,"taxadefecundidadetotal":1.77,"ano":"2007-01-01"},{"Proporcaodemenoresde5":5.6,"esperancadevidaaonascer":73.4,"esperancadevidaaos60":20.8,"graudeurbanizacao":96.7,"proporcaodeidosos":14.9,"razaodedependencia":54.1,"razaodesexos":88.7,"taxadefecundidadetotal":1.74,"ano":"2008-01-01"},{"Proporcaodemenoresde5":5.3,"esperancadevidaaonascer":73.8,"esperancadevidaaos60":21.0,"graudeurbanizacao":96.6,"proporcaodeidosos":15.0,"razaodedependencia":54.0,"razaodesexos":88.6,"taxadefecundidadetotal":1.71,"ano":"2009-01-01"},{"Proporcaodemenoresde5":5.7,"esperancadevidaaonascer":74.6,"esperancadevidaaos60":21.3,"graudeurbanizacao":97.4,"proporcaodeidosos":14.9,"razaodedependencia":54.5,"razaodesexos":88.0,"taxadefecundidadetotal":1.66,"ano":"2011-01-01"},{"Proporcaodemenoresde5":5.9,"esperancadevidaaonascer":74.9,"esperancadevidaaos60":21.5,"graudeurbanizacao":97.3,"proporcaodeidosos":16.1,"razaodedependencia":57.2,"razaodesexos":90.4,"taxadefecundidadetotal":1.64,"ano":"2012-01-01"},{"Proporcaodemenoresde5":5.6,"esperancadevidaaonascer":75.2,"esperancadevidaaos60":21.7,"graudeurbanizacao":97.0,"proporcaodeidosos":16.0,"razaodedependencia":54.1,"razaodesexos":88.0,"taxadefecundidadetotal":1.62,"ano":"2013-01-01"},{"Proporcaodemenoresde5":5.7,"esperancadevidaaonascer":75.6,"esperancadevidaaos60":21.9,"graudeurbanizacao":97.3,"proporcaodeidosos":17.4,"razaodedependencia":56.1,"razaodesexos":88.4,"taxadefecundidadetotal":1.6,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.7,"esperancadevidaaonascer":75.9,"esperancadevidaaos60":22.1,"graudeurbanizacao":97.4,"proporcaodeidosos":17.5,"razaodedependencia":55.7,"razaodesexos":89.1,"taxadefecundidadetotal":1.58,"ano":"2015-01-01"}];
var rondonia = [{"Proporcaodemenoresde5":9.0,"esperancadevidaaonascer":68.8,"esperancadevidaaos60":18.2,"graudeurbanizacao":68.2,"proporcaodeidosos":6.0,"razaodedependencia":55.6,"razaodesexos":104.4,"taxadefecundidadetotal":2.36,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.7,"esperancadevidaaonascer":69.0,"esperancadevidaaos60":18.3,"graudeurbanizacao":69.2,"proporcaodeidosos":6.1,"razaodedependencia":58.5,"razaodesexos":98.5,"taxadefecundidadetotal":2.28,"ano":"2005-01-01"},{"Proporcaodemenoresde5":8.7,"esperancadevidaaonascer":69.2,"esperancadevidaaos60":18.4,"graudeurbanizacao":70.1,"proporcaodeidosos":6.4,"razaodedependencia":57.1,"razaodesexos":103.0,"taxadefecundidadetotal":2.2,"ano":"2006-01-01"},{"Proporcaodemenoresde5":9.4,"esperancadevidaaonascer":69.5,"esperancadevidaaos60":18.5,"graudeurbanizacao":71.0,"proporcaodeidosos":6.7,"razaodedependencia":57.6,"razaodesexos":99.0,"taxadefecundidadetotal":2.14,"ano":"2007-01-01"},{"Proporcaodemenoresde5":8.1,"esperancadevidaaonascer":69.7,"esperancadevidaaos60":18.6,"graudeurbanizacao":71.9,"proporcaodeidosos":7.0,"razaodedependencia":54.3,"razaodesexos":100.8,"taxadefecundidadetotal":2.07,"ano":"2008-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":69.9,"esperancadevidaaos60":18.7,"graudeurbanizacao":72.8,"proporcaodeidosos":7.2,"razaodedependencia":52.3,"razaodesexos":99.6,"taxadefecundidadetotal":2.02,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":70.3,"esperancadevidaaos60":18.9,"graudeurbanizacao":73.5,"proporcaodeidosos":8.3,"razaodedependencia":52.4,"razaodesexos":101.3,"taxadefecundidadetotal":1.92,"ano":"2011-01-01"},{"Proporcaodemenoresde5":8.1,"esperancadevidaaonascer":70.5,"esperancadevidaaos60":19.0,"graudeurbanizacao":73.6,"proporcaodeidosos":7.8,"razaodedependencia":50.7,"razaodesexos":103.2,"taxadefecundidadetotal":1.87,"ano":"2012-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":70.7,"esperancadevidaaos60":19.1,"graudeurbanizacao":73.5,"proporcaodeidosos":9.0,"razaodedependencia":51.1,"razaodesexos":102.8,"taxadefecundidadetotal":1.83,"ano":"2013-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":70.9,"esperancadevidaaos60":19.2,"graudeurbanizacao":76.3,"proporcaodeidosos":9.0,"razaodedependencia":52.5,"razaodesexos":100.7,"taxadefecundidadetotal":1.8,"ano":"2014-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":71.1,"esperancadevidaaos60":19.3,"graudeurbanizacao":76.5,"proporcaodeidosos":10.2,"razaodedependencia":51.5,"razaodesexos":101.7,"taxadefecundidadetotal":1.77,"ano":"2015-01-01"}];
var roraima = [{"Proporcaodemenoresde5":12.4,"esperancadevidaaonascer":67.1,"esperancadevidaaos60":17.2,"graudeurbanizacao":76.4,"proporcaodeidosos":4.6,"razaodedependencia":68.8,"razaodesexos":99.7,"taxadefecundidadetotal":3.14,"ano":"2004-01-01"},{"Proporcaodemenoresde5":11.9,"esperancadevidaaonascer":67.5,"esperancadevidaaos60":17.5,"graudeurbanizacao":76.5,"proporcaodeidosos":4.7,"razaodedependencia":60.5,"razaodesexos":107.9,"taxadefecundidadetotal":3.04,"ano":"2005-01-01"},{"Proporcaodemenoresde5":10.4,"esperancadevidaaonascer":67.9,"esperancadevidaaos60":17.7,"graudeurbanizacao":76.5,"proporcaodeidosos":4.3,"razaodedependencia":65.0,"razaodesexos":105.3,"taxadefecundidadetotal":2.95,"ano":"2006-01-01"},{"Proporcaodemenoresde5":10.7,"esperancadevidaaonascer":68.3,"esperancadevidaaos60":18.0,"graudeurbanizacao":76.5,"proporcaodeidosos":5.1,"razaodedependencia":62.0,"razaodesexos":102.6,"taxadefecundidadetotal":2.85,"ano":"2007-01-01"},{"Proporcaodemenoresde5":10.0,"esperancadevidaaonascer":68.7,"esperancadevidaaos60":18.2,"graudeurbanizacao":76.5,"proporcaodeidosos":4.8,"razaodedependencia":60.9,"razaodesexos":110.1,"taxadefecundidadetotal":2.76,"ano":"2008-01-01"},{"Proporcaodemenoresde5":9.4,"esperancadevidaaonascer":69.1,"esperancadevidaaos60":18.4,"graudeurbanizacao":76.5,"proporcaodeidosos":5.0,"razaodedependencia":61.8,"razaodesexos":99.3,"taxadefecundidadetotal":2.66,"ano":"2009-01-01"},{"Proporcaodemenoresde5":9.2,"esperancadevidaaonascer":69.9,"esperancadevidaaos60":18.9,"graudeurbanizacao":83.8,"proporcaodeidosos":6.4,"razaodedependencia":57.6,"razaodesexos":102.4,"taxadefecundidadetotal":2.49,"ano":"2011-01-01"},{"Proporcaodemenoresde5":8.7,"esperancadevidaaonascer":70.2,"esperancadevidaaos60":19.0,"graudeurbanizacao":84.3,"proporcaodeidosos":6.3,"razaodedependencia":58.4,"razaodesexos":101.9,"taxadefecundidadetotal":2.41,"ano":"2012-01-01"},{"Proporcaodemenoresde5":8.8,"esperancadevidaaonascer":70.6,"esperancadevidaaos60":19.2,"graudeurbanizacao":83.5,"proporcaodeidosos":8.3,"razaodedependencia":56.4,"razaodesexos":101.7,"taxadefecundidadetotal":2.34,"ano":"2013-01-01"},{"Proporcaodemenoresde5":9.3,"esperancadevidaaonascer":70.9,"esperancadevidaaos60":19.4,"graudeurbanizacao":83.2,"proporcaodeidosos":7.1,"razaodedependencia":53.2,"razaodesexos":98.6,"taxadefecundidadetotal":2.27,"ano":"2014-01-01"},{"Proporcaodemenoresde5":8.1,"esperancadevidaaonascer":71.2,"esperancadevidaaos60":19.5,"graudeurbanizacao":84.2,"proporcaodeidosos":8.0,"razaodedependencia":57.6,"razaodesexos":100.7,"taxadefecundidadetotal":2.2,"ano":"2015-01-01"}];
var santacatarina = [{"Proporcaodemenoresde5":7.0,"esperancadevidaaonascer":74.2,"esperancadevidaaos60":20.4,"graudeurbanizacao":81.6,"proporcaodeidosos":9.1,"razaodedependencia":51.3,"razaodesexos":97.5,"taxadefecundidadetotal":1.85,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.2,"esperancadevidaaonascer":74.7,"esperancadevidaaos60":20.7,"graudeurbanizacao":82.4,"proporcaodeidosos":9.2,"razaodedependencia":50.9,"razaodesexos":94.7,"taxadefecundidadetotal":1.81,"ano":"2005-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":75.2,"esperancadevidaaos60":21.1,"graudeurbanizacao":82.5,"proporcaodeidosos":10.1,"razaodedependencia":50.8,"razaodesexos":95.9,"taxadefecundidadetotal":1.77,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":75.6,"esperancadevidaaos60":21.4,"graudeurbanizacao":82.8,"proporcaodeidosos":10.4,"razaodedependencia":49.3,"razaodesexos":98.2,"taxadefecundidadetotal":1.73,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.7,"esperancadevidaaonascer":76.1,"esperancadevidaaos60":21.8,"graudeurbanizacao":82.6,"proporcaodeidosos":11.3,"razaodedependencia":50.4,"razaodesexos":96.3,"taxadefecundidadetotal":1.7,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":76.5,"esperancadevidaaos60":22.1,"graudeurbanizacao":82.1,"proporcaodeidosos":10.8,"razaodedependencia":47.3,"razaodesexos":98.6,"taxadefecundidadetotal":1.67,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.3,"esperancadevidaaonascer":77.3,"esperancadevidaaos60":22.6,"graudeurbanizacao":83.5,"proporcaodeidosos":11.8,"razaodedependencia":47.9,"razaodesexos":98.2,"taxadefecundidadetotal":1.62,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":77.7,"esperancadevidaaos60":22.9,"graudeurbanizacao":84.2,"proporcaodeidosos":12.9,"razaodedependencia":50.2,"razaodesexos":95.7,"taxadefecundidadetotal":1.6,"ano":"2012-01-01"},{"Proporcaodemenoresde5":5.8,"esperancadevidaaonascer":78.1,"esperancadevidaaos60":23.1,"graudeurbanizacao":84.9,"proporcaodeidosos":14.2,"razaodedependencia":50.8,"razaodesexos":95.6,"taxadefecundidadetotal":1.58,"ano":"2013-01-01"},{"Proporcaodemenoresde5":5.7,"esperancadevidaaonascer":78.4,"esperancadevidaaos60":23.3,"graudeurbanizacao":84.1,"proporcaodeidosos":14.3,"razaodedependencia":49.7,"razaodesexos":95.3,"taxadefecundidadetotal":1.57,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.5,"esperancadevidaaonascer":78.7,"esperancadevidaaos60":23.5,"graudeurbanizacao":83.7,"proporcaodeidosos":15.2,"razaodedependencia":50.0,"razaodesexos":97.7,"taxadefecundidadetotal":1.55,"ano":"2015-01-01"}];
var saopaulo = [{"Proporcaodemenoresde5":7.5,"esperancadevidaaonascer":73.5,"esperancadevidaaos60":20.6,"graudeurbanizacao":94.5,"proporcaodeidosos":10.0,"razaodedependencia":52.6,"razaodesexos":93.2,"taxadefecundidadetotal":1.9,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":74.0,"esperancadevidaaos60":20.8,"graudeurbanizacao":94.2,"proporcaodeidosos":10.5,"razaodedependencia":51.6,"razaodesexos":94.0,"taxadefecundidadetotal":1.86,"ano":"2005-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":74.4,"esperancadevidaaos60":21.0,"graudeurbanizacao":94.6,"proporcaodeidosos":10.6,"razaodedependencia":50.9,"razaodesexos":94.1,"taxadefecundidadetotal":1.82,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":74.9,"esperancadevidaaos60":21.3,"graudeurbanizacao":94.5,"proporcaodeidosos":11.2,"razaodedependencia":50.9,"razaodesexos":93.7,"taxadefecundidadetotal":1.79,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":75.3,"esperancadevidaaos60":21.5,"graudeurbanizacao":94.3,"proporcaodeidosos":11.9,"razaodedependencia":50.8,"razaodesexos":93.3,"taxadefecundidadetotal":1.75,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":75.7,"esperancadevidaaos60":21.7,"graudeurbanizacao":94.5,"proporcaodeidosos":12.3,"razaodedependencia":50.8,"razaodesexos":95.0,"taxadefecundidadetotal":1.72,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":76.5,"esperancadevidaaos60":22.1,"graudeurbanizacao":96.8,"proporcaodeidosos":12.9,"razaodedependencia":50.6,"razaodesexos":94.1,"taxadefecundidadetotal":1.67,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":76.8,"esperancadevidaaos60":22.3,"graudeurbanizacao":96.4,"proporcaodeidosos":13.4,"razaodedependencia":51.1,"razaodesexos":92.6,"taxadefecundidadetotal":1.65,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":77.2,"esperancadevidaaos60":22.5,"graudeurbanizacao":96.5,"proporcaodeidosos":13.9,"razaodedependencia":51.7,"razaodesexos":94.1,"taxadefecundidadetotal":1.63,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":77.5,"esperancadevidaaos60":22.7,"graudeurbanizacao":96.6,"proporcaodeidosos":14.8,"razaodedependencia":51.7,"razaodesexos":92.7,"taxadefecundidadetotal":1.61,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.8,"esperancadevidaaonascer":77.8,"esperancadevidaaos60":22.9,"graudeurbanizacao":96.6,"proporcaodeidosos":15.3,"razaodedependencia":51.8,"razaodesexos":91.6,"taxadefecundidadetotal":1.59,"ano":"2015-01-01"}];
var sergipe = [{"Proporcaodemenoresde5":9.3,"esperancadevidaaonascer":69.1,"esperancadevidaaos60":19.1,"graudeurbanizacao":82.1,"proporcaodeidosos":8.1,"razaodedependencia":59.1,"razaodesexos":97.5,"taxadefecundidadetotal":2.42,"ano":"2004-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":69.5,"esperancadevidaaos60":19.2,"graudeurbanizacao":81.9,"proporcaodeidosos":9.3,"razaodedependencia":56.9,"razaodesexos":96.3,"taxadefecundidadetotal":2.33,"ano":"2005-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":69.8,"esperancadevidaaos60":19.4,"graudeurbanizacao":82.2,"proporcaodeidosos":9.0,"razaodedependencia":58.2,"razaodesexos":97.4,"taxadefecundidadetotal":2.24,"ano":"2006-01-01"},{"Proporcaodemenoresde5":8.3,"esperancadevidaaonascer":70.1,"esperancadevidaaos60":19.5,"graudeurbanizacao":81.7,"proporcaodeidosos":7.7,"razaodedependencia":56.5,"razaodesexos":91.0,"taxadefecundidadetotal":2.16,"ano":"2007-01-01"},{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":70.4,"esperancadevidaaos60":19.6,"graudeurbanizacao":83.4,"proporcaodeidosos":7.9,"razaodedependencia":54.5,"razaodesexos":91.2,"taxadefecundidadetotal":2.09,"ano":"2008-01-01"},{"Proporcaodemenoresde5":8.8,"esperancadevidaaonascer":70.7,"esperancadevidaaos60":19.7,"graudeurbanizacao":82.9,"proporcaodeidosos":8.5,"razaodedependencia":53.6,"razaodesexos":93.2,"taxadefecundidadetotal":2.03,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":71.3,"esperancadevidaaos60":19.9,"graudeurbanizacao":73.4,"proporcaodeidosos":10.2,"razaodedependencia":56.0,"razaodesexos":92.9,"taxadefecundidadetotal":1.92,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.7,"esperancadevidaaonascer":71.6,"esperancadevidaaos60":20.1,"graudeurbanizacao":73.4,"proporcaodeidosos":10.3,"razaodedependencia":54.9,"razaodesexos":91.7,"taxadefecundidadetotal":1.87,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":71.9,"esperancadevidaaos60":20.2,"graudeurbanizacao":73.2,"proporcaodeidosos":10.8,"razaodedependencia":53.7,"razaodesexos":97.9,"taxadefecundidadetotal":1.83,"ano":"2013-01-01"},{"Proporcaodemenoresde5":7.0,"esperancadevidaaonascer":72.1,"esperancadevidaaos60":20.3,"graudeurbanizacao":71.9,"proporcaodeidosos":11.7,"razaodedependencia":55.8,"razaodesexos":95.8,"taxadefecundidadetotal":1.79,"ano":"2014-01-01"},{"Proporcaodemenoresde5":6.9,"esperancadevidaaonascer":72.4,"esperancadevidaaos60":20.4,"graudeurbanizacao":70.9,"proporcaodeidosos":11.8,"razaodedependencia":54.6,"razaodesexos":93.1,"taxadefecundidadetotal":1.76,"ano":"2015-01-01"}];
var sudeste = [{"Proporcaodemenoresde5":7.3,"esperancadevidaaonascer":73.1,"esperancadevidaaos60":20.6,"graudeurbanizacao":92.0,"proporcaodeidosos":10.7,"razaodedependencia":54.4,"razaodesexos":93.0,"taxadefecundidadetotal":1.91,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.0,"esperancadevidaaonascer":73.5,"esperancadevidaaos60":20.8,"graudeurbanizacao":91.8,"proporcaodeidosos":11.1,"razaodedependencia":53.1,"razaodesexos":93.9,"taxadefecundidadetotal":1.87,"ano":"2005-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":74.0,"esperancadevidaaos60":21.0,"graudeurbanizacao":92.0,"proporcaodeidosos":11.3,"razaodedependencia":52.7,"razaodesexos":93.1,"taxadefecundidadetotal":1.83,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.3,"esperancadevidaaonascer":74.4,"esperancadevidaaos60":21.2,"graudeurbanizacao":92.0,"proporcaodeidosos":11.8,"razaodedependencia":52.7,"razaodesexos":93.8,"taxadefecundidadetotal":1.79,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.3,"esperancadevidaaonascer":74.8,"esperancadevidaaos60":21.4,"graudeurbanizacao":92.1,"proporcaodeidosos":12.4,"razaodedependencia":52.3,"razaodesexos":92.8,"taxadefecundidadetotal":1.76,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":75.2,"esperancadevidaaos60":21.6,"graudeurbanizacao":92.2,"proporcaodeidosos":12.7,"razaodedependencia":52.3,"razaodesexos":93.6,"taxadefecundidadetotal":1.73,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":75.9,"esperancadevidaaos60":22.0,"graudeurbanizacao":93.4,"proporcaodeidosos":13.2,"razaodedependencia":52.1,"razaodesexos":93.1,"taxadefecundidadetotal":1.68,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":76.2,"esperancadevidaaos60":22.2,"graudeurbanizacao":93.2,"proporcaodeidosos":13.9,"razaodedependencia":52.8,"razaodesexos":93.4,"taxadefecundidadetotal":1.65,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":76.6,"esperancadevidaaos60":22.4,"graudeurbanizacao":93.2,"proporcaodeidosos":14.2,"razaodedependencia":52.4,"razaodesexos":93.2,"taxadefecundidadetotal":1.63,"ano":"2013-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":76.9,"esperancadevidaaos60":22.6,"graudeurbanizacao":93.2,"proporcaodeidosos":15.0,"razaodedependencia":52.8,"razaodesexos":92.5,"taxadefecundidadetotal":1.61,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.8,"esperancadevidaaonascer":77.2,"esperancadevidaaos60":22.7,"graudeurbanizacao":93.1,"proporcaodeidosos":15.6,"razaodedependencia":52.9,"razaodesexos":92.4,"taxadefecundidadetotal":1.59,"ano":"2015-01-01"}];
var sul = [{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":73.6,"esperancadevidaaos60":20.2,"graudeurbanizacao":82.0,"proporcaodeidosos":10.5,"razaodedependencia":54.6,"razaodesexos":96.3,"taxadefecundidadetotal":1.93,"ano":"2004-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":74.0,"esperancadevidaaos60":20.5,"graudeurbanizacao":82.4,"proporcaodeidosos":10.7,"razaodedependencia":54.6,"razaodesexos":95.1,"taxadefecundidadetotal":1.88,"ano":"2005-01-01"},{"Proporcaodemenoresde5":6.8,"esperancadevidaaonascer":74.4,"esperancadevidaaos60":20.8,"graudeurbanizacao":82.8,"proporcaodeidosos":10.9,"razaodedependencia":53.8,"razaodesexos":94.5,"taxadefecundidadetotal":1.84,"ano":"2006-01-01"},{"Proporcaodemenoresde5":6.4,"esperancadevidaaonascer":74.8,"esperancadevidaaos60":21.0,"graudeurbanizacao":82.8,"proporcaodeidosos":11.3,"razaodedependencia":53.1,"razaodesexos":95.9,"taxadefecundidadetotal":1.8,"ano":"2007-01-01"},{"Proporcaodemenoresde5":6.6,"esperancadevidaaonascer":75.2,"esperancadevidaaos60":21.3,"graudeurbanizacao":83.0,"proporcaodeidosos":12.1,"razaodedependencia":53.6,"razaodesexos":94.8,"taxadefecundidadetotal":1.76,"ano":"2008-01-01"},{"Proporcaodemenoresde5":6.1,"esperancadevidaaonascer":75.5,"esperancadevidaaos60":21.6,"graudeurbanizacao":83.2,"proporcaodeidosos":12.3,"razaodedependencia":52.0,"razaodesexos":95.4,"taxadefecundidadetotal":1.73,"ano":"2009-01-01"},{"Proporcaodemenoresde5":6.2,"esperancadevidaaonascer":76.2,"esperancadevidaaos60":22.0,"graudeurbanizacao":85.1,"proporcaodeidosos":13.1,"razaodedependencia":51.8,"razaodesexos":95.5,"taxadefecundidadetotal":1.67,"ano":"2011-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":76.5,"esperancadevidaaos60":22.2,"graudeurbanizacao":85.2,"proporcaodeidosos":14.2,"razaodedependencia":53.1,"razaodesexos":95.4,"taxadefecundidadetotal":1.65,"ano":"2012-01-01"},{"Proporcaodemenoresde5":6.0,"esperancadevidaaonascer":76.9,"esperancadevidaaos60":22.4,"graudeurbanizacao":85.5,"proporcaodeidosos":14.6,"razaodedependencia":52.9,"razaodesexos":94.8,"taxadefecundidadetotal":1.62,"ano":"2013-01-01"},{"Proporcaodemenoresde5":5.9,"esperancadevidaaonascer":77.2,"esperancadevidaaos60":22.6,"graudeurbanizacao":85.7,"proporcaodeidosos":15.2,"razaodedependencia":53.2,"razaodesexos":94.2,"taxadefecundidadetotal":1.6,"ano":"2014-01-01"},{"Proporcaodemenoresde5":5.8,"esperancadevidaaonascer":77.5,"esperancadevidaaos60":22.7,"graudeurbanizacao":85.6,"proporcaodeidosos":15.9,"razaodedependencia":53.3,"razaodesexos":95.6,"taxadefecundidadetotal":1.59,"ano":"2015-01-01"}];
var tocantins = [{"Proporcaodemenoresde5":9.6,"esperancadevidaaonascer":69.3,"esperancadevidaaos60":18.7,"graudeurbanizacao":71.5,"proporcaodeidosos":8.0,"razaodedependencia":66.1,"razaodesexos":101.9,"taxadefecundidadetotal":2.6,"ano":"2004-01-01"},{"Proporcaodemenoresde5":9.4,"esperancadevidaaonascer":69.7,"esperancadevidaaos60":19.0,"graudeurbanizacao":71.1,"proporcaodeidosos":8.5,"razaodedependencia":65.9,"razaodesexos":104.9,"taxadefecundidadetotal":2.52,"ano":"2005-01-01"},{"Proporcaodemenoresde5":9.3,"esperancadevidaaonascer":70.1,"esperancadevidaaos60":19.3,"graudeurbanizacao":74.1,"proporcaodeidosos":8.8,"razaodedependencia":65.6,"razaodesexos":99.5,"taxadefecundidadetotal":2.44,"ano":"2006-01-01"},{"Proporcaodemenoresde5":9.3,"esperancadevidaaonascer":70.5,"esperancadevidaaos60":19.6,"graudeurbanizacao":73.5,"proporcaodeidosos":8.8,"razaodedependencia":64.7,"razaodesexos":99.1,"taxadefecundidadetotal":2.37,"ano":"2007-01-01"},{"Proporcaodemenoresde5":8.6,"esperancadevidaaonascer":70.8,"esperancadevidaaos60":19.9,"graudeurbanizacao":74.8,"proporcaodeidosos":9.4,"razaodedependencia":61.9,"razaodesexos":102.5,"taxadefecundidadetotal":2.3,"ano":"2008-01-01"},{"Proporcaodemenoresde5":8.2,"esperancadevidaaonascer":71.2,"esperancadevidaaos60":20.1,"graudeurbanizacao":74.4,"proporcaodeidosos":10.3,"razaodedependencia":63.7,"razaodesexos":103.6,"taxadefecundidadetotal":2.24,"ano":"2009-01-01"},{"Proporcaodemenoresde5":7.6,"esperancadevidaaonascer":71.9,"esperancadevidaaos60":20.5,"graudeurbanizacao":77.6,"proporcaodeidosos":9.9,"razaodedependencia":58.5,"razaodesexos":100.7,"taxadefecundidadetotal":2.12,"ano":"2011-01-01"},{"Proporcaodemenoresde5":7.9,"esperancadevidaaonascer":72.2,"esperancadevidaaos60":20.7,"graudeurbanizacao":77.5,"proporcaodeidosos":10.5,"razaodedependencia":61.5,"razaodesexos":98.3,"taxadefecundidadetotal":2.07,"ano":"2012-01-01"},{"Proporcaodemenoresde5":8.0,"esperancadevidaaonascer":72.5,"esperancadevidaaos60":20.8,"graudeurbanizacao":75.9,"proporcaodeidosos":10.8,"razaodedependencia":59.4,"razaodesexos":96.4,"taxadefecundidadetotal":2.02,"ano":"2013-01-01"},{"Proporcaodemenoresde5":7.4,"esperancadevidaaonascer":72.8,"esperancadevidaaos60":20.9,"graudeurbanizacao":78.5,"proporcaodeidosos":11.7,"razaodedependencia":60.6,"razaodesexos":99.6,"taxadefecundidadetotal":1.97,"ano":"2014-01-01"},{"Proporcaodemenoresde5":7.1,"esperancadevidaaonascer":73.1,"esperancadevidaaos60":21.1,"graudeurbanizacao":78.4,"proporcaodeidosos":13.0,"razaodedependencia":59.0,"razaodesexos":102.5,"taxadefecundidadetotal":1.93,"ano":"2015-01-01"}];


var acre_pop = [{"populacaoresidente":646548,"ano":"2004-01-01"},{"populacaoresidente":661427,"ano":"2005-01-01"},{"populacaoresidente":676252,"ano":"2006-01-01"},{"populacaoresidente":690997,"ano":"2007-01-01"},{"populacaoresidente":705635,"ano":"2008-01-01"},{"populacaoresidente":720132,"ano":"2009-01-01"},{"populacaoresidente":734447,"ano":"2010-01-01"},{"populacaoresidente":748616,"ano":"2011-01-01"},{"populacaoresidente":762631,"ano":"2012-01-01"},{"populacaoresidente":776463,"ano":"2013-01-01"},{"populacaoresidente":790101,"ano":"2014-01-01"},{"populacaoresidente":803513,"ano":"2015-01-01"},{"populacaoresidente":816687,"ano":"2016-01-01"},{"populacaoresidente":829619,"ano":"2017-01-01"}];
var alagoas_pop = [{"populacaoresidente":3049431,"ano":"2004-01-01"},{"populacaoresidente":3084050,"ano":"2005-01-01"},{"populacaoresidente":3117060,"ano":"2006-01-01"},{"populacaoresidente":3148387,"ano":"2007-01-01"},{"populacaoresidente":3177975,"ano":"2008-01-01"},{"populacaoresidente":3205791,"ano":"2009-01-01"},{"populacaoresidente":3231836,"ano":"2010-01-01"},{"populacaoresidente":3256277,"ano":"2011-01-01"},{"populacaoresidente":3279289,"ano":"2012-01-01"},{"populacaoresidente":3300935,"ano":"2013-01-01"},{"populacaoresidente":3321305,"ano":"2014-01-01"},{"populacaoresidente":3340502,"ano":"2015-01-01"},{"populacaoresidente":3358527,"ano":"2016-01-01"},{"populacaoresidente":3375382,"ano":"2017-01-01"}];
var amapa_pop = [{"populacaoresidente":577786,"ano":"2004-01-01"},{"populacaoresidente":596914,"ano":"2005-01-01"},{"populacaoresidente":615692,"ano":"2006-01-01"},{"populacaoresidente":634068,"ano":"2007-01-01"},{"populacaoresidente":651977,"ano":"2008-01-01"},{"populacaoresidente":669360,"ano":"2009-01-01"},{"populacaoresidente":686189,"ano":"2010-01-01"},{"populacaoresidente":702638,"ano":"2011-01-01"},{"populacaoresidente":718906,"ano":"2012-01-01"},{"populacaoresidente":734996,"ano":"2013-01-01"},{"populacaoresidente":750912,"ano":"2014-01-01"},{"populacaoresidente":766679,"ano":"2015-01-01"},{"populacaoresidente":782295,"ano":"2016-01-01"},{"populacaoresidente":797722,"ano":"2017-01-01"}];
var amazonas_pop = [{"populacaoresidente":3170740,"ano":"2004-01-01"},{"populacaoresidente":3244995,"ano":"2005-01-01"},{"populacaoresidente":3318679,"ano":"2006-01-01"},{"populacaoresidente":3391594,"ano":"2007-01-01"},{"populacaoresidente":3463562,"ano":"2008-01-01"},{"populacaoresidente":3534456,"ano":"2009-01-01"},{"populacaoresidente":3604165,"ano":"2010-01-01"},{"populacaoresidente":3672969,"ano":"2011-01-01"},{"populacaoresidente":3740976,"ano":"2012-01-01"},{"populacaoresidente":3807921,"ano":"2013-01-01"},{"populacaoresidente":3873743,"ano":"2014-01-01"},{"populacaoresidente":3938336,"ano":"2015-01-01"},{"populacaoresidente":4001667,"ano":"2016-01-01"},{"populacaoresidente":4063614,"ano":"2017-01-01"}];
var bahia_pop = [{"populacaoresidente":14075570,"ano":"2004-01-01"},{"populacaoresidente":14203837,"ano":"2005-01-01"},{"populacaoresidente":14327129,"ano":"2006-01-01"},{"populacaoresidente":14445266,"ano":"2007-01-01"},{"populacaoresidente":14558148,"ano":"2008-01-01"},{"populacaoresidente":14665810,"ano":"2009-01-01"},{"populacaoresidente":14768312,"ano":"2010-01-01"},{"populacaoresidente":14865405,"ano":"2011-01-01"},{"populacaoresidente":14957177,"ano":"2012-01-01"},{"populacaoresidente":15044137,"ano":"2013-01-01"},{"populacaoresidente":15126371,"ano":"2014-01-01"},{"populacaoresidente":15203934,"ano":"2015-01-01"},{"populacaoresidente":15276566,"ano":"2016-01-01"},{"populacaoresidente":15344447,"ano":"2017-01-01"}];
var brasil_pop = [{"populacaoresidente":182911487,"ano":"2004-01-01"},{"populacaoresidente":185150806,"ano":"2005-01-01"},{"populacaoresidente":187335137,"ano":"2006-01-01"},{"populacaoresidente":189462755,"ano":"2007-01-01"},{"populacaoresidente":191532439,"ano":"2008-01-01"},{"populacaoresidente":193543969,"ano":"2009-01-01"},{"populacaoresidente":195497797,"ano":"2010-01-01"},{"populacaoresidente":197397018,"ano":"2011-01-01"},{"populacaoresidente":199242462,"ano":"2012-01-01"},{"populacaoresidente":201032714,"ano":"2013-01-01"},{"populacaoresidente":202768562,"ano":"2014-01-01"},{"populacaoresidente":204450649,"ano":"2015-01-01"},{"populacaoresidente":206081432,"ano":"2016-01-01"},{"populacaoresidente":207660929,"ano":"2017-01-01"}];
var ceara_pop = [{"populacaoresidente":8042368,"ano":"2004-01-01"},{"populacaoresidente":8141584,"ano":"2005-01-01"},{"populacaoresidente":8236289,"ano":"2006-01-01"},{"populacaoresidente":8326445,"ano":"2007-01-01"},{"populacaoresidente":8412055,"ano":"2008-01-01"},{"populacaoresidente":8493155,"ano":"2009-01-01"},{"populacaoresidente":8569783,"ano":"2010-01-01"},{"populacaoresidente":8642630,"ano":"2011-01-01"},{"populacaoresidente":8712413,"ano":"2012-01-01"},{"populacaoresidente":8779338,"ano":"2013-01-01"},{"populacaoresidente":8843553,"ano":"2014-01-01"},{"populacaoresidente":8905225,"ano":"2015-01-01"},{"populacaoresidente":8964432,"ano":"2016-01-01"},{"populacaoresidente":9021232,"ano":"2017-01-01"}];
var centrooeste_pop = [{"populacaoresidente":12849436,"ano":"2004-01-01"},{"populacaoresidente":13091910,"ano":"2005-01-01"},{"populacaoresidente":13333632,"ano":"2006-01-01"},{"populacaoresidente":13574576,"ano":"2007-01-01"},{"populacaoresidente":13814725,"ano":"2008-01-01"},{"populacaoresidente":14054150,"ano":"2009-01-01"},{"populacaoresidente":14292945,"ano":"2010-01-01"},{"populacaoresidente":14529758,"ano":"2011-01-01"},{"populacaoresidente":14763186,"ano":"2012-01-01"},{"populacaoresidente":14993191,"ano":"2013-01-01"},{"populacaoresidente":15219608,"ano":"2014-01-01"},{"populacaoresidente":15442232,"ano":"2015-01-01"},{"populacaoresidente":15660988,"ano":"2016-01-01"},{"populacaoresidente":15875907,"ano":"2017-01-01"}];
var distritofederal_pop = [{"populacaoresidente":2278824,"ano":"2004-01-01"},{"populacaoresidente":2326355,"ano":"2005-01-01"},{"populacaoresidente":2376239,"ano":"2006-01-01"},{"populacaoresidente":2428637,"ano":"2007-01-01"},{"populacaoresidente":2483669,"ano":"2008-01-01"},{"populacaoresidente":2541434,"ano":"2009-01-01"},{"populacaoresidente":2602074,"ano":"2010-01-01"},{"populacaoresidente":2664444,"ano":"2011-01-01"},{"populacaoresidente":2727098,"ano":"2012-01-01"},{"populacaoresidente":2789761,"ano":"2013-01-01"},{"populacaoresidente":2852372,"ano":"2014-01-01"},{"populacaoresidente":2914830,"ano":"2015-01-01"},{"populacaoresidente":2977216,"ano":"2016-01-01"},{"populacaoresidente":3039444,"ano":"2017-01-01"}];
var espiritosanto_pop = [{"populacaoresidente":3397224,"ano":"2004-01-01"},{"populacaoresidente":3447900,"ano":"2005-01-01"},{"populacaoresidente":3498381,"ano":"2006-01-01"},{"populacaoresidente":3548614,"ano":"2007-01-01"},{"populacaoresidente":3598524,"ano":"2008-01-01"},{"populacaoresidente":3648075,"ano":"2009-01-01"},{"populacaoresidente":3697243,"ano":"2010-01-01"},{"populacaoresidente":3745577,"ano":"2011-01-01"},{"populacaoresidente":3792874,"ano":"2012-01-01"},{"populacaoresidente":3839366,"ano":"2013-01-01"},{"populacaoresidente":3885049,"ano":"2014-01-01"},{"populacaoresidente":3929911,"ano":"2015-01-01"},{"populacaoresidente":3973697,"ano":"2016-01-01"},{"populacaoresidente":4016356,"ano":"2017-01-01"}];
var goias_pop = [{"populacaoresidente":5534201,"ano":"2004-01-01"},{"populacaoresidente":5643344,"ano":"2005-01-01"},{"populacaoresidente":5750254,"ano":"2006-01-01"},{"populacaoresidente":5854898,"ano":"2007-01-01"},{"populacaoresidente":5957260,"ano":"2008-01-01"},{"populacaoresidente":6057367,"ano":"2009-01-01"},{"populacaoresidente":6155266,"ano":"2010-01-01"},{"populacaoresidente":6250462,"ano":"2011-01-01"},{"populacaoresidente":6343136,"ano":"2012-01-01"},{"populacaoresidente":6434048,"ano":"2013-01-01"},{"populacaoresidente":6523222,"ano":"2014-01-01"},{"populacaoresidente":6610681,"ano":"2015-01-01"},{"populacaoresidente":6695855,"ano":"2016-01-01"},{"populacaoresidente":6778772,"ano":"2017-01-01"}];
var maranhao_pop = [{"populacaoresidente":6135099,"ano":"2004-01-01"},{"populacaoresidente":6219144,"ano":"2005-01-01"},{"populacaoresidente":6301445,"ano":"2006-01-01"},{"populacaoresidente":6381473,"ano":"2007-01-01"},{"populacaoresidente":6458789,"ano":"2008-01-01"},{"populacaoresidente":6533027,"ano":"2009-01-01"},{"populacaoresidente":6603880,"ano":"2010-01-01"},{"populacaoresidente":6670977,"ano":"2011-01-01"},{"populacaoresidente":6734353,"ano":"2012-01-01"},{"populacaoresidente":6794301,"ano":"2013-01-01"},{"populacaoresidente":6850884,"ano":"2014-01-01"},{"populacaoresidente":6904241,"ano":"2015-01-01"},{"populacaoresidente":6954036,"ano":"2016-01-01"},{"populacaoresidente":7000229,"ano":"2017-01-01"}];
var matogrosso_pop = [{"populacaoresidente":2762537,"ano":"2004-01-01"},{"populacaoresidente":2811904,"ano":"2005-01-01"},{"populacaoresidente":2860741,"ano":"2006-01-01"},{"populacaoresidente":2908961,"ano":"2007-01-01"},{"populacaoresidente":2956496,"ano":"2008-01-01"},{"populacaoresidente":3003310,"ano":"2009-01-01"},{"populacaoresidente":3049348,"ano":"2010-01-01"},{"populacaoresidente":3094547,"ano":"2011-01-01"},{"populacaoresidente":3138822,"ano":"2012-01-01"},{"populacaoresidente":3182113,"ano":"2013-01-01"},{"populacaoresidente":3224357,"ano":"2014-01-01"},{"populacaoresidente":3265486,"ano":"2015-01-01"},{"populacaoresidente":3305531,"ano":"2016-01-01"},{"populacaoresidente":3344544,"ano":"2017-01-01"}];
var matogrossodosul_pop = [{"populacaoresidente":2273874,"ano":"2004-01-01"},{"populacaoresidente":2310307,"ano":"2005-01-01"},{"populacaoresidente":2346398,"ano":"2006-01-01"},{"populacaoresidente":2382080,"ano":"2007-01-01"},{"populacaoresidente":2417300,"ano":"2008-01-01"},{"populacaoresidente":2452039,"ano":"2009-01-01"},{"populacaoresidente":2486257,"ano":"2010-01-01"},{"populacaoresidente":2520305,"ano":"2011-01-01"},{"populacaoresidente":2554130,"ano":"2012-01-01"},{"populacaoresidente":2587269,"ano":"2013-01-01"},{"populacaoresidente":2619657,"ano":"2014-01-01"},{"populacaoresidente":2651235,"ano":"2015-01-01"},{"populacaoresidente":2682386,"ano":"2016-01-01"},{"populacaoresidente":2713147,"ano":"2017-01-01"}];
var minasgerais_pop = [{"populacaoresidente":19037702,"ano":"2004-01-01"},{"populacaoresidente":19236503,"ano":"2005-01-01"},{"populacaoresidente":19428834,"ano":"2006-01-01"},{"populacaoresidente":19614742,"ano":"2007-01-01"},{"populacaoresidente":19794278,"ano":"2008-01-01"},{"populacaoresidente":19967560,"ano":"2009-01-01"},{"populacaoresidente":20134742,"ano":"2010-01-01"},{"populacaoresidente":20294485,"ano":"2011-01-01"},{"populacaoresidente":20446840,"ano":"2012-01-01"},{"populacaoresidente":20593356,"ano":"2013-01-01"},{"populacaoresidente":20734097,"ano":"2014-01-01"},{"populacaoresidente":20869101,"ano":"2015-01-01"},{"populacaoresidente":20997560,"ano":"2016-01-01"},{"populacaoresidente":21119536,"ano":"2017-01-01"}];
var nordeste_pop = [{"populacaoresidente":51376866,"ano":"2004-01-01"},{"populacaoresidente":51947102,"ano":"2005-01-01"},{"populacaoresidente":52499041,"ano":"2006-01-01"},{"populacaoresidente":53031557,"ano":"2007-01-01"},{"populacaoresidente":53543869,"ano":"2008-01-01"},{"populacaoresidente":54035553,"ano":"2009-01-01"},{"populacaoresidente":54506351,"ano":"2010-01-01"},{"populacaoresidente":54955883,"ano":"2011-01-01"},{"populacaoresidente":55384833,"ano":"2012-01-01"},{"populacaoresidente":55794707,"ano":"2013-01-01"},{"populacaoresidente":56186190,"ano":"2014-01-01"},{"populacaoresidente":56560081,"ano":"2015-01-01"},{"populacaoresidente":56915936,"ano":"2016-01-01"},{"populacaoresidente":57254159,"ano":"2017-01-01"}];
var norte_pop = [{"populacaoresidente":14492037,"ano":"2004-01-01"},{"populacaoresidente":14790808,"ano":"2005-01-01"},{"populacaoresidente":15085215,"ano":"2006-01-01"},{"populacaoresidente":15374524,"ano":"2007-01-01"},{"populacaoresidente":15658112,"ano":"2008-01-01"},{"populacaoresidente":15935514,"ano":"2009-01-01"},{"populacaoresidente":16206409,"ano":"2010-01-01"},{"populacaoresidente":16471131,"ano":"2011-01-01"},{"populacaoresidente":16730156,"ano":"2012-01-01"},{"populacaoresidente":16983484,"ano":"2013-01-01"},{"populacaoresidente":17231027,"ano":"2014-01-01"},{"populacaoresidente":17472636,"ano":"2015-01-01"},{"populacaoresidente":17707783,"ano":"2016-01-01"},{"populacaoresidente":17936201,"ano":"2017-01-01"}];
var para_pop = [{"populacaoresidente":6904392,"ano":"2004-01-01"},{"populacaoresidente":7031660,"ano":"2005-01-01"},{"populacaoresidente":7157305,"ano":"2006-01-01"},{"populacaoresidente":7281011,"ano":"2007-01-01"},{"populacaoresidente":7402515,"ano":"2008-01-01"},{"populacaoresidente":7521656,"ano":"2009-01-01"},{"populacaoresidente":7638340,"ano":"2010-01-01"},{"populacaoresidente":7751993,"ano":"2011-01-01"},{"populacaoresidente":7862333,"ano":"2012-01-01"},{"populacaoresidente":7969654,"ano":"2013-01-01"},{"populacaoresidente":8073924,"ano":"2014-01-01"},{"populacaoresidente":8175113,"ano":"2015-01-01"},{"populacaoresidente":8272724,"ano":"2016-01-01"},{"populacaoresidente":8366628,"ano":"2017-01-01"}];
var paraiba_pop = [{"populacaoresidente":3612078,"ano":"2004-01-01"},{"populacaoresidente":3647204,"ano":"2005-01-01"},{"populacaoresidente":3682222,"ano":"2006-01-01"},{"populacaoresidente":3717022,"ano":"2007-01-01"},{"populacaoresidente":3751507,"ano":"2008-01-01"},{"populacaoresidente":3785598,"ano":"2009-01-01"},{"populacaoresidente":3819237,"ano":"2010-01-01"},{"populacaoresidente":3852082,"ano":"2011-01-01"},{"populacaoresidente":3883822,"ano":"2012-01-01"},{"populacaoresidente":3914421,"ano":"2013-01-01"},{"populacaoresidente":3943885,"ano":"2014-01-01"},{"populacaoresidente":3972202,"ano":"2015-01-01"},{"populacaoresidente":3999415,"ano":"2016-01-01"},{"populacaoresidente":4025558,"ano":"2017-01-01"}];
var parana_pop = [{"populacaoresidente":10128262,"ano":"2004-01-01"},{"populacaoresidente":10235875,"ano":"2005-01-01"},{"populacaoresidente":10340390,"ano":"2006-01-01"},{"populacaoresidente":10441872,"ano":"2007-01-01"},{"populacaoresidente":10540407,"ano":"2008-01-01"},{"populacaoresidente":10636065,"ano":"2009-01-01"},{"populacaoresidente":10728961,"ano":"2010-01-01"},{"populacaoresidente":10820421,"ano":"2011-01-01"},{"populacaoresidente":10910374,"ano":"2012-01-01"},{"populacaoresidente":10997465,"ano":"2013-01-01"},{"populacaoresidente":11081692,"ano":"2014-01-01"},{"populacaoresidente":11163018,"ano":"2015-01-01"},{"populacaoresidente":11242720,"ano":"2016-01-01"},{"populacaoresidente":11320892,"ano":"2017-01-01"}];
var pernambuco_pop = [{"populacaoresidente":8484308,"ano":"2004-01-01"},{"populacaoresidente":8572129,"ano":"2005-01-01"},{"populacaoresidente":8658333,"ano":"2006-01-01"},{"populacaoresidente":8742825,"ano":"2007-01-01"},{"populacaoresidente":8825549,"ano":"2008-01-01"},{"populacaoresidente":8906488,"ano":"2009-01-01"},{"populacaoresidente":8985658,"ano":"2010-01-01"},{"populacaoresidente":9062506,"ano":"2011-01-01"},{"populacaoresidente":9136697,"ano":"2012-01-01"},{"populacaoresidente":9208550,"ano":"2013-01-01"},{"populacaoresidente":9278152,"ano":"2014-01-01"},{"populacaoresidente":9345603,"ano":"2015-01-01"},{"populacaoresidente":9410772,"ano":"2016-01-01"},{"populacaoresidente":9473707,"ano":"2017-01-01"}];
var piaui_pop = [{"populacaoresidente":3007333,"ano":"2004-01-01"},{"populacaoresidente":3035330,"ano":"2005-01-01"},{"populacaoresidente":3061253,"ano":"2006-01-01"},{"populacaoresidente":3085026,"ano":"2007-01-01"},{"populacaoresidente":3106597,"ano":"2008-01-01"},{"populacaoresidente":3125918,"ano":"2009-01-01"},{"populacaoresidente":3142946,"ano":"2010-01-01"},{"populacaoresidente":3158000,"ano":"2011-01-01"},{"populacaoresidente":3171456,"ano":"2012-01-01"},{"populacaoresidente":3183404,"ano":"2013-01-01"},{"populacaoresidente":3193956,"ano":"2014-01-01"},{"populacaoresidente":3203262,"ano":"2015-01-01"},{"populacaoresidente":3211411,"ano":"2016-01-01"},{"populacaoresidente":3218485,"ano":"2017-01-01"}];
var riograndedonorte_pop = [{"populacaoresidente":3019694,"ano":"2004-01-01"},{"populacaoresidente":3062933,"ano":"2005-01-01"},{"populacaoresidente":3105227,"ano":"2006-01-01"},{"populacaoresidente":3146552,"ano":"2007-01-01"},{"populacaoresidente":3186891,"ano":"2008-01-01"},{"populacaoresidente":3226259,"ano":"2009-01-01"},{"populacaoresidente":3264647,"ano":"2010-01-01"},{"populacaoresidente":3302061,"ano":"2011-01-01"},{"populacaoresidente":3338489,"ano":"2012-01-01"},{"populacaoresidente":3373959,"ano":"2013-01-01"},{"populacaoresidente":3408510,"ano":"2014-01-01"},{"populacaoresidente":3442175,"ano":"2015-01-01"},{"populacaoresidente":3474998,"ano":"2016-01-01"},{"populacaoresidente":3507003,"ano":"2017-01-01"}];
var riograndedosul_pop = [{"populacaoresidente":10628806,"ano":"2004-01-01"},{"populacaoresidente":10705605,"ano":"2005-01-01"},{"populacaoresidente":10777424,"ano":"2006-01-01"},{"populacaoresidente":10844476,"ano":"2007-01-01"},{"populacaoresidente":10906958,"ano":"2008-01-01"},{"populacaoresidente":10965071,"ano":"2009-01-01"},{"populacaoresidente":11019030,"ano":"2010-01-01"},{"populacaoresidente":11069861,"ano":"2011-01-01"},{"populacaoresidente":11118261,"ano":"2012-01-01"},{"populacaoresidente":11164043,"ano":"2013-01-01"},{"populacaoresidente":11207274,"ano":"2014-01-01"},{"populacaoresidente":11247972,"ano":"2015-01-01"},{"populacaoresidente":11286500,"ano":"2016-01-01"},{"populacaoresidente":11322895,"ano":"2017-01-01"}];
var riodejaneiro_pop = [{"populacaoresidente":15374696,"ano":"2004-01-01"},{"populacaoresidente":15503631,"ano":"2005-01-01"},{"populacaoresidente":15627358,"ano":"2006-01-01"},{"populacaoresidente":15746038,"ano":"2007-01-01"},{"populacaoresidente":15859866,"ano":"2008-01-01"},{"populacaoresidente":15969092,"ano":"2009-01-01"},{"populacaoresidente":16074006,"ano":"2010-01-01"},{"populacaoresidente":16175495,"ano":"2011-01-01"},{"populacaoresidente":16273984,"ano":"2012-01-01"},{"populacaoresidente":16369179,"ano":"2013-01-01"},{"populacaoresidente":16461173,"ano":"2014-01-01"},{"populacaoresidente":16550024,"ano":"2015-01-01"},{"populacaoresidente":16635996,"ano":"2016-01-01"},{"populacaoresidente":16718956,"ano":"2017-01-01"}];
var rondonia_pop = [{"populacaoresidente":1515151,"ano":"2004-01-01"},{"populacaoresidente":1541715,"ano":"2005-01-01"},{"populacaoresidente":1567546,"ano":"2006-01-01"},{"populacaoresidente":1592640,"ano":"2007-01-01"},{"populacaoresidente":1616992,"ano":"2008-01-01"},{"populacaoresidente":1640607,"ano":"2009-01-01"},{"populacaoresidente":1663490,"ano":"2010-01-01"},{"populacaoresidente":1685697,"ano":"2011-01-01"},{"populacaoresidente":1707272,"ano":"2012-01-01"},{"populacaoresidente":1728214,"ano":"2013-01-01"},{"populacaoresidente":1748531,"ano":"2014-01-01"},{"populacaoresidente":1768204,"ano":"2015-01-01"},{"populacaoresidente":1787279,"ano":"2016-01-01"},{"populacaoresidente":1805788,"ano":"2017-01-01"}];
var roraima_pop = [{"populacaoresidente":392392,"ano":"2004-01-01"},{"populacaoresidente":405273,"ano":"2005-01-01"},{"populacaoresidente":417634,"ano":"2006-01-01"},{"populacaoresidente":429406,"ano":"2007-01-01"},{"populacaoresidente":440533,"ano":"2008-01-01"},{"populacaoresidente":450969,"ano":"2009-01-01"},{"populacaoresidente":460678,"ano":"2010-01-01"},{"populacaoresidente":469943,"ano":"2011-01-01"},{"populacaoresidente":479073,"ano":"2012-01-01"},{"populacaoresidente":488072,"ano":"2013-01-01"},{"populacaoresidente":496936,"ano":"2014-01-01"},{"populacaoresidente":505665,"ano":"2015-01-01"},{"populacaoresidente":514229,"ano":"2016-01-01"},{"populacaoresidente":522636,"ano":"2017-01-01"}];
var santacatarina_pop = [{"populacaoresidente":5801932,"ano":"2004-01-01"},{"populacaoresidente":5890979,"ano":"2005-01-01"},{"populacaoresidente":5980986,"ano":"2006-01-01"},{"populacaoresidente":6072000,"ano":"2007-01-01"},{"populacaoresidente":6164049,"ano":"2008-01-01"},{"populacaoresidente":6257173,"ano":"2009-01-01"},{"populacaoresidente":6351418,"ano":"2010-01-01"},{"populacaoresidente":6446209,"ano":"2011-01-01"},{"populacaoresidente":6540596,"ano":"2012-01-01"},{"populacaoresidente":6634254,"ano":"2013-01-01"},{"populacaoresidente":6727148,"ano":"2014-01-01"},{"populacaoresidente":6819190,"ano":"2015-01-01"},{"populacaoresidente":6910553,"ano":"2016-01-01"},{"populacaoresidente":7001161,"ano":"2017-01-01"}];
var saopaulo_pop = [{"populacaoresidente":39824526,"ano":"2004-01-01"},{"populacaoresidente":40300493,"ano":"2005-01-01"},{"populacaoresidente":40763876,"ano":"2006-01-01"},{"populacaoresidente":41214356,"ano":"2007-01-01"},{"populacaoresidente":41651651,"ano":"2008-01-01"},{"populacaoresidente":42075716,"ano":"2009-01-01"},{"populacaoresidente":42486692,"ano":"2010-01-01"},{"populacaoresidente":42888198,"ano":"2011-01-01"},{"populacaoresidente":43281358,"ano":"2012-01-01"},{"populacaoresidente":43663669,"ano":"2013-01-01"},{"populacaoresidente":44035304,"ano":"2014-01-01"},{"populacaoresidente":44396484,"ano":"2015-01-01"},{"populacaoresidente":44749699,"ano":"2016-01-01"},{"populacaoresidente":45094866,"ano":"2017-01-01"}];
var sergipe_pop = [{"populacaoresidente":1950985,"ano":"2004-01-01"},{"populacaoresidente":1980891,"ano":"2005-01-01"},{"populacaoresidente":2010083,"ano":"2006-01-01"},{"populacaoresidente":2038561,"ano":"2007-01-01"},{"populacaoresidente":2066358,"ano":"2008-01-01"},{"populacaoresidente":2093507,"ano":"2009-01-01"},{"populacaoresidente":2120052,"ano":"2010-01-01"},{"populacaoresidente":2145945,"ano":"2011-01-01"},{"populacaoresidente":2171137,"ano":"2012-01-01"},{"populacaoresidente":2195662,"ano":"2013-01-01"},{"populacaoresidente":2219574,"ano":"2014-01-01"},{"populacaoresidente":2242937,"ano":"2015-01-01"},{"populacaoresidente":2265779,"ano":"2016-01-01"},{"populacaoresidente":2288116,"ano":"2017-01-01"}];
var sudeste_pop = [{"populacaoresidente":77634148,"ano":"2004-01-01"},{"populacaoresidente":78488527,"ano":"2005-01-01"},{"populacaoresidente":79318449,"ano":"2006-01-01"},{"populacaoresidente":80123750,"ano":"2007-01-01"},{"populacaoresidente":80904319,"ano":"2008-01-01"},{"populacaoresidente":81660443,"ano":"2009-01-01"},{"populacaoresidente":82392683,"ano":"2010-01-01"},{"populacaoresidente":83103755,"ano":"2011-01-01"},{"populacaoresidente":83795056,"ano":"2012-01-01"},{"populacaoresidente":84465570,"ano":"2013-01-01"},{"populacaoresidente":85115623,"ano":"2014-01-01"},{"populacaoresidente":85745520,"ano":"2015-01-01"},{"populacaoresidente":86356952,"ano":"2016-01-01"},{"populacaoresidente":86949714,"ano":"2017-01-01"}];
var tocantins_pop = [{"populacaoresidente":1285028,"ano":"2004-01-01"},{"populacaoresidente":1308824,"ano":"2005-01-01"},{"populacaoresidente":1332107,"ano":"2006-01-01"},{"populacaoresidente":1354808,"ano":"2007-01-01"},{"populacaoresidente":1376898,"ano":"2008-01-01"},{"populacaoresidente":1398334,"ano":"2009-01-01"},{"populacaoresidente":1419100,"ano":"2010-01-01"},{"populacaoresidente":1439275,"ano":"2011-01-01"},{"populacaoresidente":1458965,"ano":"2012-01-01"},{"populacaoresidente":1478164,"ano":"2013-01-01"},{"populacaoresidente":1496880,"ano":"2014-01-01"},{"populacaoresidente":1515126,"ano":"2015-01-01"},{"populacaoresidente":1532902,"ano":"2016-01-01"},{"populacaoresidente":1550194,"ano":"2017-01-01"}];

function razaodesexos(){


var chart = AmCharts.makeChart("chartdivRazão de sexos", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

     dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: brasil,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: norte,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: amazonas,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: roraima,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: para,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rondonia,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: acre,
        categoryField: "ano"
    },
		{
        title: "RM Belém",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmbelem,
        categoryField: "ano"
    },
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: amapa,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: tocantins,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: nordeste,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: maranhao,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: piaui,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: alagoas,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: ceara,
        categoryField: "ano"
    },
		{
        title: "RM Fortaleza",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmfortaleza,
        categoryField: "ano"
    },
		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: riograndedonorte,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: paraiba,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: pernambuco,
        categoryField: "ano"
    },
		{
        title: "RM recife",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmrecife,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: sergipe,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: bahia,
        categoryField: "ano"
    },
		{
        title: "RM Salvador",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmsalvador,
        categoryField: "ano"
    },
		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: sudeste,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: minasgerais,
        categoryField: "ano"
    },	
		{
        title: "RM Belo Horizonte",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmbelohorizonte,
        categoryField: "ano"
    },
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: espiritosanto,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: riodejaneiro,
        categoryField: "ano"
    },
		{
        title: "RM Rio de Janeiro",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmriodejaneiro,
        categoryField: "ano"
    },	
		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: saopaulo,
        categoryField: "ano"
    },
		{
        title: "RM São Paulo",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmsaopaulo,
        categoryField: "ano"
    },	
		{
        title: "Sul",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: sul,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: parana,
        categoryField: "ano"
    },
		{
        title: "RM Curitiba",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmcuritiba,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: santacatarina,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: riograndedosul,
        categoryField: "ano"
    },

		{
        title: "RM Porto Alegre",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: rmportoalegre,
        categoryField: "ano"
    },

		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: centrooeste,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: matogrossodosul,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: matogrosso,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: goias,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "razaodesexos",
            toField: "razaodesexos"
        }
		],
        dataProvider: distritofederal,
        categoryField: "ano"
    }
	],



    panels: [
	 {

        title: "Razão de Sexos",

        stockGraphs: [{
            id: "razaodesexos",
            valueField: "razaodesexos",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		 
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "razaodesexos",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};

function graudeurbanizacao(){


var chart = AmCharts.makeChart("chartdivGrau de urbanização", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

    dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: brasil,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: norte,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: amazonas,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: roraima,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: para,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rondonia,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: acre,
        categoryField: "ano"
    },
		{
        title: "RM Belém",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmbelem,
        categoryField: "ano"
    },
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: amapa,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: tocantins,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: nordeste,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: maranhao,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: piaui,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: alagoas,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: ceara,
        categoryField: "ano"
    },
		{
        title: "RM Fortaleza",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmfortaleza,
        categoryField: "ano"
    },
		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: riograndedonorte,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: paraiba,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: pernambuco,
        categoryField: "ano"
    },
		{
        title: "RM recife",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmrecife,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: sergipe,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: bahia,
        categoryField: "ano"
    },
		{
        title: "RM Salvador",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmsalvador,
        categoryField: "ano"
    },
		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: sudeste,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: minasgerais,
        categoryField: "ano"
    },	
		{
        title: "RM Belo Horizonte",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmbelohorizonte,
        categoryField: "ano"
    },
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: espiritosanto,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: riodejaneiro,
        categoryField: "ano"
    },
		{
        title: "RM Rio de Janeiro",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmriodejaneiro,
        categoryField: "ano"
    },	
		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: saopaulo,
        categoryField: "ano"
    },
		{
        title: "RM São Paulo",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmsaopaulo,
        categoryField: "ano"
    },	
		{
        title: "Sul",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: sul,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: parana,
        categoryField: "ano"
    },
		{
        title: "RM Curitiba",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmcuritiba,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: santacatarina,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: riograndedosul,
        categoryField: "ano"
    },

		{
        title: "RM Porto Alegre",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: rmportoalegre,
        categoryField: "ano"
    },

		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: centrooeste,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: matogrossodosul,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: matogrosso,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: goias,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "graudeurbanizacao",
            toField: "graudeurbanizacao"
        }
		],
        dataProvider: distritofederal,
        categoryField: "ano"
    }
	],



    panels: [
	 {

        title: "Grau de Urbanização",

        stockGraphs: [{
            id: "graudeurbanizacao",
            valueField: "graudeurbanizacao",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "graudeurbanizacao",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};


function razaodedependencia(){


var chart = AmCharts.makeChart("chartdivRazão de dependência", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

    dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: brasil,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: norte,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: amazonas,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: roraima,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: para,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rondonia,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: acre,
        categoryField: "ano"
    },
		{
        title: "RM Belém",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmbelem,
        categoryField: "ano"
    },
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: amapa,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: tocantins,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: nordeste,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: maranhao,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: piaui,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: alagoas,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: ceara,
        categoryField: "ano"
    },
		{
        title: "RM Fortaleza",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmfortaleza,
        categoryField: "ano"
    },
		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: riograndedonorte,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: paraiba,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: pernambuco,
        categoryField: "ano"
    },
		{
        title: "RM recife",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmrecife,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: sergipe,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: bahia,
        categoryField: "ano"
    },
		{
        title: "RM Salvador",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmsalvador,
        categoryField: "ano"
    },
		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: sudeste,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: minasgerais,
        categoryField: "ano"
    },	
		{
        title: "RM Belo Horizonte",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmbelohorizonte,
        categoryField: "ano"
    },
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: espiritosanto,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: riodejaneiro,
        categoryField: "ano"
    },
		{
        title: "RM Rio de Janeiro",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmriodejaneiro,
        categoryField: "ano"
    },	
		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: saopaulo,
        categoryField: "ano"
    },
		{
        title: "RM São Paulo",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmsaopaulo,
        categoryField: "ano"
    },	
		{
        title: "Sul",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: sul,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: parana,
        categoryField: "ano"
    },
		{
        title: "RM Curitiba",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmcuritiba,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: santacatarina,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: riograndedosul,
        categoryField: "ano"
    },

		{
        title: "RM Porto Alegre",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: rmportoalegre,
        categoryField: "ano"
    },

		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: centrooeste,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: matogrossodosul,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: matogrosso,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: goias,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "razaodedependencia",
            toField: "razaodedependencia"
        }
		],
        dataProvider: distritofederal,
        categoryField: "ano"
    }
	],



    panels: [
	 {

        title: "Razão de Dependência",

        stockGraphs: [{
            id: "razaodedependencia",
            valueField: "razaodedependencia",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "razaodedependencia",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};

function Proporcaodemenoresde5(){


var chart = AmCharts.makeChart("chartdivProporção de menores de 5 anos de idade na população", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

    dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: brasil,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: norte,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: amazonas,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: roraima,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: para,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rondonia,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: acre,
        categoryField: "ano"
    },
		{
        title: "RM Belém",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmbelem,
        categoryField: "ano"
    },
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: amapa,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: tocantins,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: nordeste,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: maranhao,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: piaui,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: alagoas,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: ceara,
        categoryField: "ano"
    },
		{
        title: "RM Fortaleza",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmfortaleza,
        categoryField: "ano"
    },
		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: riograndedonorte,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: paraiba,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: pernambuco,
        categoryField: "ano"
    },
		{
        title: "RM recife",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmrecife,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: sergipe,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: bahia,
        categoryField: "ano"
    },
		{
        title: "RM Salvador",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmsalvador,
        categoryField: "ano"
    },
		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: sudeste,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: minasgerais,
        categoryField: "ano"
    },	
		{
        title: "RM Belo Horizonte",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmbelohorizonte,
        categoryField: "ano"
    },
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: espiritosanto,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: riodejaneiro,
        categoryField: "ano"
    },
		{
        title: "RM Rio de Janeiro",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmriodejaneiro,
        categoryField: "ano"
    },	
		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: saopaulo,
        categoryField: "ano"
    },
		{
        title: "RM São Paulo",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmsaopaulo,
        categoryField: "ano"
    },	
		{
        title: "Sul",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: sul,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: parana,
        categoryField: "ano"
    },
		{
        title: "RM Curitiba",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmcuritiba,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: santacatarina,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: riograndedosul,
        categoryField: "ano"
    },

		{
        title: "RM Porto Alegre",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: rmportoalegre,
        categoryField: "ano"
    },

		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: centrooeste,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: matogrossodosul,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: matogrosso,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: goias,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "Proporcaodemenoresde5",
            toField: "Proporcaodemenoresde5"
        }
		],
        dataProvider: distritofederal,
        categoryField: "ano"
    }
	],



    panels: [
	 {

        title: "Proporção de menores de 5 anos de idade",

        stockGraphs: [{
            id: "Proporcaodemenoresde5",
            valueField: "Proporcaodemenoresde5",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "Proporcaodemenoresde5",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};


function proporcaodeidosos(){


var chart = AmCharts.makeChart("chartdivProporção de idosos na população", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

    dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: brasil,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: norte,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: amazonas,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: roraima,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: para,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rondonia,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: acre,
        categoryField: "ano"
    },
		{
        title: "RM Belém",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmbelem,
        categoryField: "ano"
    },
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: amapa,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: tocantins,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: nordeste,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: maranhao,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: piaui,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: alagoas,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: ceara,
        categoryField: "ano"
    },
		{
        title: "RM Fortaleza",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmfortaleza,
        categoryField: "ano"
    },
		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: riograndedonorte,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: paraiba,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: pernambuco,
        categoryField: "ano"
    },
		{
        title: "RM recife",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmrecife,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: sergipe,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: bahia,
        categoryField: "ano"
    },
		{
        title: "RM Salvador",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmsalvador,
        categoryField: "ano"
    },
		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: sudeste,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: minasgerais,
        categoryField: "ano"
    },	
		{
        title: "RM Belo Horizonte",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmbelohorizonte,
        categoryField: "ano"
    },
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: espiritosanto,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: riodejaneiro,
        categoryField: "ano"
    },
		{
        title: "RM Rio de Janeiro",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmriodejaneiro,
        categoryField: "ano"
    },	
		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: saopaulo,
        categoryField: "ano"
    },
		{
        title: "RM São Paulo",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmsaopaulo,
        categoryField: "ano"
    },	
		{
        title: "Sul",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: sul,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: parana,
        categoryField: "ano"
    },
		{
        title: "RM Curitiba",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmcuritiba,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: santacatarina,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: riograndedosul,
        categoryField: "ano"
    },

		{
        title: "RM Porto Alegre",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: rmportoalegre,
        categoryField: "ano"
    },

		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: centrooeste,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: matogrossodosul,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: matogrosso,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: goias,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "proporcaodeidosos",
            toField: "proporcaodeidosos"
        }
		],
        dataProvider: distritofederal,
        categoryField: "ano"
    }
	],



    panels: [
	 {

        title: "Proporção de idosos",

        stockGraphs: [{
            id: "proporcaodeidosos",
            valueField: "proporcaodeidosos",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "proporcaodeidosos",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};


function populacaoresidente(){


var chart = AmCharts.makeChart("chartdivPopulação total", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	


    dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: brasil_pop,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: norte_pop,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: amazonas_pop,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: roraima_pop,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: para_pop,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: rondonia_pop,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: acre_pop,
        categoryField: "ano"
    },
		
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: amapa_pop,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: tocantins_pop,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: nordeste_pop,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: maranhao_pop,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: piaui_pop,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: alagoas_pop,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: ceara_pop,
        categoryField: "ano"
    },

		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: riograndedonorte_pop,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: paraiba_pop,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: pernambuco_pop,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: sergipe_pop,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: bahia_pop,
        categoryField: "ano"
    },

		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: sudeste_pop,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: minasgerais_pop,
        categoryField: "ano"
    },	
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: espiritosanto_pop,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: riodejaneiro_pop,
        categoryField: "ano"
    },

		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: saopaulo_pop,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: parana_pop,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: santacatarina_pop,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: riograndedosul_pop,
        categoryField: "ano"
    },


		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: centrooeste_pop,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: matogrossodosul_pop,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: matogrosso_pop,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: goias_pop,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "populacaoresidente",
            toField: "populacaoresidente"
        }
		],
        dataProvider: distritofederal_pop,
        categoryField: "ano"
    }
	],




    panels: [
	 {

        title: "População Residente",

        stockGraphs: [{
            id: "populacaoresidente",
            valueField: "populacaoresidente",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "populacaoresidente",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};

function esperancadevidaaonascer(){


var chart = AmCharts.makeChart("chartdivEsperança de vida ao nascer", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

    dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: brasil,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: norte,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: amazonas,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: roraima,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: para,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rondonia,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: acre,
        categoryField: "ano"
    },
		{
        title: "RM Belém",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmbelem,
        categoryField: "ano"
    },
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: amapa,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: tocantins,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: nordeste,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: maranhao,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: piaui,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: alagoas,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: ceara,
        categoryField: "ano"
    },
		{
        title: "RM Fortaleza",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmfortaleza,
        categoryField: "ano"
    },
		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: riograndedonorte,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: paraiba,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: pernambuco,
        categoryField: "ano"
    },
		{
        title: "RM recife",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmrecife,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: sergipe,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: bahia,
        categoryField: "ano"
    },
		{
        title: "RM Salvador",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmsalvador,
        categoryField: "ano"
    },
		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: sudeste,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: minasgerais,
        categoryField: "ano"
    },	
		{
        title: "RM Belo Horizonte",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmbelohorizonte,
        categoryField: "ano"
    },
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: espiritosanto,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: riodejaneiro,
        categoryField: "ano"
    },
		{
        title: "RM Rio de Janeiro",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmriodejaneiro,
        categoryField: "ano"
    },	
		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: saopaulo,
        categoryField: "ano"
    },
		{
        title: "RM São Paulo",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmsaopaulo,
        categoryField: "ano"
    },	
		{
        title: "Sul",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: sul,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: parana,
        categoryField: "ano"
    },
		{
        title: "RM Curitiba",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmcuritiba,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: santacatarina,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: riograndedosul,
        categoryField: "ano"
    },

		{
        title: "RM Porto Alegre",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: rmportoalegre,
        categoryField: "ano"
    },

		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: centrooeste,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: matogrossodosul,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: matogrosso,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: goias,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "esperancadevidaaonascer",
            toField: "esperancadevidaaonascer"
        }
		],
        dataProvider: distritofederal,
        categoryField: "ano"
    }
	],



    panels: [
	 {

        title: "Esperança de vida ao nascer",

        stockGraphs: [{
            id: "esperancadevidaaonascer",
            valueField: "esperancadevidaaonascer",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "esperancadevidaaonascer",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};

function esperancadevidaaos60(){


var chart = AmCharts.makeChart("chartdivEsperança de vida aos 60 anos de idade", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

     dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: brasil,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: norte,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: amazonas,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: roraima,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: para,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rondonia,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: acre,
        categoryField: "ano"
    },
		{
        title: "RM Belém",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmbelem,
        categoryField: "ano"
    },
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: amapa,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: tocantins,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: nordeste,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: maranhao,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: piaui,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: alagoas,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: ceara,
        categoryField: "ano"
    },
		{
        title: "RM Fortaleza",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmfortaleza,
        categoryField: "ano"
    },
		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: riograndedonorte,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: paraiba,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: pernambuco,
        categoryField: "ano"
    },
		{
        title: "RM recife",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmrecife,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: sergipe,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: bahia,
        categoryField: "ano"
    },
		{
        title: "RM Salvador",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmsalvador,
        categoryField: "ano"
    },
		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: sudeste,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: minasgerais,
        categoryField: "ano"
    },	
		{
        title: "RM Belo Horizonte",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmbelohorizonte,
        categoryField: "ano"
    },
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: espiritosanto,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: riodejaneiro,
        categoryField: "ano"
    },
		{
        title: "RM Rio de Janeiro",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmriodejaneiro,
        categoryField: "ano"
    },	
		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: saopaulo,
        categoryField: "ano"
    },
		{
        title: "RM São Paulo",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmsaopaulo,
        categoryField: "ano"
    },	
		{
        title: "Sul",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: sul,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: parana,
        categoryField: "ano"
    },
		{
        title: "RM Curitiba",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmcuritiba,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: santacatarina,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: riograndedosul,
        categoryField: "ano"
    },

		{
        title: "RM Porto Alegre",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: rmportoalegre,
        categoryField: "ano"
    },

		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: centrooeste,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: matogrossodosul,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: matogrosso,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: goias,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "esperancadevidaaos60",
            toField: "esperancadevidaaos60"
        }
		],
        dataProvider: distritofederal,
        categoryField: "ano"
    }
	],



    panels: [
	 {

        title: "Esperança de vida aos 60 anos de idade",

        stockGraphs: [{
            id: "esperancadevidaaos60",
            valueField: "esperancadevidaaos60",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "esperancadevidaaos60",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};

function taxadefecundidadetotal(){


var chart = AmCharts.makeChart("chartdivTaxa de fecundidade total", {
    type: "stock",
    theme: "light",
	dataDateFormat : "YYYY",
//	colors: ["#3DC1D0", "#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"],
	colors: [ "#91D5DF", "#67C9D5",  "#2E9BA6", "#8091A4",  "#677F93", "#586B83", "#3E4C5B", "#61788E"],
	"thousandsSeparator": ".",
	"decimalSeparator": ",",
	extendToFullPeriod : true,
    pathToImages: "http://www.amcharts.com/lib/3/images/",

    panelsSettings: {
        recalculateToPercents: "never"
    },
	

    dataSets: [
	{
        title: "Brasil",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: brasil,
        categoryField: "ano"
    },
	{
        title: "Norte",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: norte,
        categoryField: "ano"
    },
	{
        title: "Amazonas",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: amazonas,
        categoryField: "ano"
    },	
	{
        title: "Roraima",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: roraima,
        categoryField: "ano"
    },	
	{
        title: "Pará",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: para,
        categoryField: "ano"
    },	
	{
        title: "Rondônia",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rondonia,
        categoryField: "ano"
    },	
	{
        title: "Acre",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: acre,
        categoryField: "ano"
    },
		{
        title: "RM Belém",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmbelem,
        categoryField: "ano"
    },
		{
        title: "Amapa",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: amapa,
        categoryField: "ano"
    },
		{
        title: "Tocantins",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: tocantins,
        categoryField: "ano"
    },
		{
        title: "Nordeste",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: nordeste,
        categoryField: "ano"
    },
		{
        title: "Maranhao",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: maranhao,
        categoryField: "ano"
    },
		{
        title: "Piauí",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: piaui,
        categoryField: "ano"
    },
		{
        title: "Alagoas",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: alagoas,
        categoryField: "ano"
    },
		{
        title: "Ceará",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: ceara,
        categoryField: "ano"
    },
		{
        title: "RM Fortaleza",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmfortaleza,
        categoryField: "ano"
    },
		{
        title: "Rio Grande do Norte",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: riograndedonorte,
        categoryField: "ano"
    },	
		{
        title: "Paraíba",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: paraiba,
        categoryField: "ano"
    },
		{
        title: "Pernambuco",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: pernambuco,
        categoryField: "ano"
    },
		{
        title: "RM recife",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmrecife,
        categoryField: "ano"
    },
		{
        title: "Sergipe",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: sergipe,
        categoryField: "ano"
    },	
		{
        title: "Bahia",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: bahia,
        categoryField: "ano"
    },
		{
        title: "RM Salvador",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmsalvador,
        categoryField: "ano"
    },
		{
        title: "Sudeste",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: sudeste,
        categoryField: "ano"
    },	
		{
        title: "Minas Gerais",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: minasgerais,
        categoryField: "ano"
    },	
		{
        title: "RM Belo Horizonte",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmbelohorizonte,
        categoryField: "ano"
    },
		{
        title: "Espirito Santo",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: espiritosanto,
        categoryField: "ano"
    },	
		{
        title: "Rio de Janeiro",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: riodejaneiro,
        categoryField: "ano"
    },
		{
        title: "RM Rio de Janeiro",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmriodejaneiro,
        categoryField: "ano"
    },	
		{
        title: "São Paulo",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: saopaulo,
        categoryField: "ano"
    },
		{
        title: "RM São Paulo",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmsaopaulo,
        categoryField: "ano"
    },	
		{
        title: "Sul",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: sul,
        categoryField: "ano"
    },
		{
        title: "Paraná",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: parana,
        categoryField: "ano"
    },
		{
        title: "RM Curitiba",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmcuritiba,
        categoryField: "ano"
    },
		{
        title: "Santa Catarina",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: santacatarina,
        categoryField: "ano"
    },
	{
        title: "Rio Grande do Sul",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: riograndedosul,
        categoryField: "ano"
    },

		{
        title: "RM Porto Alegre",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: rmportoalegre,
        categoryField: "ano"
    },

		{
        title: "Centro Oeste",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: centrooeste,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso do Sul",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: matogrossodosul,
        categoryField: "ano"
    },
		{
        title: "Mato Grosso",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: matogrosso,
        categoryField: "ano"
    },
		{
        title: "Goias",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: goias,
        categoryField: "ano"
    },
		{
        title: "Distrito Federal",
        fieldMappings: [{
            fromField: "taxadefecundidadetotal",
            toField: "taxadefecundidadetotal"
        }
		],
        dataProvider: distritofederal,
        categoryField: "ano"
    }
	],



    panels: [
	 {

        title: "Taxa de fecundidade total",

        stockGraphs: [{
            id: "taxadefecundidadetotal",
            valueField: "taxadefecundidadetotal",
            lineThickness: 3,
            title: "",			
			labelPosition : "left",
            balloonText: "[[title]]:<b>  [[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>  [[value]]</b>",
			minPeriod: "YYYY",
            comparable: true,
        }],
		
		  "guides": 
			{
			  "fillAlpha": 0.0,
			  "value": 0,
			  "toValue": 0
			},
	
        stockLegend: {
			showEntries: false,			
        },
		
			"numberFormatter": {
            "precision": -1,
            "decimalSeparator": ",",
            "thousandsSeparator": "."
		},
		"categoryAxis": {
		 "gridThickness": 0,
		}
		
	}
	
	],
 


    chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,	
		cursorPosition: 'start',
		categoryBalloonEnabled : true,
        cursorAlpha: 0.1,		
        valueLineBalloonEnabled: false,
        valueLineEnabled: false,
        valueLineAlpha: 0.5,
		cursorColor: "#75899c"
    },
	
  "chartScrollbarSettings": {
	"position": "top",
    "graph": "taxadefecundidadetotal",
    "graphType": "line",
    "usePeriod": "YYYY"
  },
  
    dataSetSelector: {
        position: "right",
		selectText : "Selecione a localidade:",
		compareText : "Selecione outra localidade para comparar:"
    }
	
});

};

taxadefecundidadetotal();
esperancadevidaaos60();
esperancadevidaaonascer();
populacaoresidente();
proporcaodeidosos();
Proporcaodemenoresde5();
razaodedependencia();
graudeurbanizacao();
razaodesexos();

showChart('chartdivPopulação total', "375px");	

};	
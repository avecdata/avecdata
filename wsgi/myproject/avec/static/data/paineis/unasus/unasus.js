function unasus_init(){
{% for theme in view_themes %}		
	posts_count	= "{{ theme.title }}";		
	clickMenu(posts_count);
	console.log(posts_count);
{% endfor %}
};
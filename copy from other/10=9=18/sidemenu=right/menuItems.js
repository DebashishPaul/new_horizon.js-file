

//One global variable to set, use true if you want the menus to reinit when the user changes text size (recommended):
resizereinit=true;

menu[1] = {
id:'menu1', //use unique quoted id (quoted) REQUIRED!!
fontsize:'100%', // express as percentage with the % sign
linkheight:22 ,  // linked horizontal cells height
hdingwidth:210 ,  // heading - non linked horizontal cells width
// Finished configuration. Use default values for all other settings for this particular menu (menu[1]) ///

menuItems:[ // REQUIRED!!
//[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
["Menu"], //create header
["facebook", "http://www.facebook", ""],
["webguide.newsnet24", "http://www.webguide.newsnet24.com",""],
["cricket", "http://www.cricinfo.com", ""],
["bdnews", "http://www.bdnews24.com", ""],
["prothom-alo", "http://www.prothom-alo.com", ""],


]}; // REQUIRED!! do not edit or remove


////////////////////Stop Editing/////////////////

make_menus();
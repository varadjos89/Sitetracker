insert into resale_price values( 1, 24, 120000);
insert into resale_price values( 2, 36, 160000);

insert into bus_condition values( 1, 'miles over 100,000', -0.1);
insert into bus_condition values( 2, 'air conditioning system', 0.03);
insert into bus_condition values( 3, 'bus year is 1972 or older', 0.34);

insert into bus values( 1, true, "https://www.intelligenttransport.com/wp-content/uploads/mbta-boston-bus.jpg", 36, 20000, 1, 6, 1970);
insert into bus values( 2, true, "https://upload.wikimedia.org/wikipedia/commons/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg", 24,  30000, 1, 8, 1960);
insert into bus values( 3, true, "https://www.intelligenttransport.com/wp-content/uploads/las-vegas-new.jpg", 36, 120000, 1, 12, 1980);
insert into bus values( 4, true, "https://www.intelligenttransport.com/wp-content/uploads/mbta-boston-bus.jpg", 36, 60000, 1, 16, 2000);
insert into bus values( 5, false, "https://image.newyork.com.au/wp-content/uploads/2012/07/Bus-in-New-York-Bus-on-9th-Avenue-700x400.jpg", 24,  90000, 1, 4, 1988);
insert into bus values( 6, false, "https://www.intelligenttransport.com/wp-content/uploads/firstbus_bus.jpg", 36,  100000, 2, 8, 1994);


SET FOREIGN_KEY_CHECKS = 0; 
TRUNCATE table bus; 
SET FOREIGN_KEY_CHECKS = 1;
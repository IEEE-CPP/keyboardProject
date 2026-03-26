function left_xl_extrude_4_outline_fn(){
    return new CSG.Path2D([[360.5,-97],[392.5,-97]]).appendArc([394.5,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([394.5,-20]).appendArc([392.5,-18],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5,-18]).appendPoint([358.5,-16]).appendArc([356.5,-14],{"radius":2,"clockwise":false,"large":false}).appendPoint([340.5,-14]).appendPoint([340.5,-13.5]).appendArc([338.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([313.5,-11.5]).appendArc([311.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([311.5,-14]).appendPoint([295.5,-14]).appendArc([293.5,-16],{"radius":2,"clockwise":false,"large":false}).appendPoint([293.5,-16.5]).appendPoint([277.5,-16.5]).appendArc([275.5,-18.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([275.5,-93.5]).appendArc([275.5296894,-93.8433308],{"radius":2,"clockwise":false,"large":false}).appendPoint([269.4426317,-97.3576952]).appendArc([268.7105809,-100.089746],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.8508761,-100.3327445]).appendPoint([253.6732131,-115.5104076]).appendArc([253.0895653,-117.0170897],{"radius":2,"clockwise":false,"large":false}).appendArc([252.8237549,-118.1095582],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.1554175,-136.5876605]).appendArc([242.8874683,-139.3197113],{"radius":2,"clockwise":false,"large":false}).appendPoint([263.6720779,-151.3197113]).appendArc([266.4041287,-150.5876605],{"radius":2,"clockwise":false,"large":false}).appendPoint([277.4878027,-131.3901741]).appendArc([277.8056399,-130.9759605],{"radius":2,"clockwise":true,"large":false}).appendPoint([291.1498724,-117.631728]).appendArc([291.6211514,-116.8845358],{"radius":2,"clockwise":false,"large":false}).appendPoint([303.0814156,-110.2679492]).appendArc([304.0814156,-110],{"radius":2,"clockwise":true,"large":false}).appendPoint([320.5,-110]).appendArc([322.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.5,-107.5]).appendPoint([329.5,-107.5]).appendPoint([329.5,-108]).appendArc([331.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([356.5,-110]).appendArc([358.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5,-99]).appendArc([360.5,-97],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[87.5,-97],[119.5,-97]]).appendArc([121.5,-99],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.5,-108]).appendArc([123.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.5,-110]).appendArc([150.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.5,-107.5]).appendPoint([157.5,-107.5]).appendPoint([157.5,-108]).appendArc([159.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([175.9185844,-110]).appendArc([176.9185844,-110.2679492],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.3788486,-116.8845358]).appendArc([188.8501276,-117.631728],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.1943601,-130.9759605]).appendArc([202.5121973,-131.3901741],{"radius":2,"clockwise":true,"large":false}).appendPoint([213.5958713,-150.5876605]).appendArc([216.3279221,-151.3197113],{"radius":2,"clockwise":false,"large":false}).appendPoint([237.1125317,-139.3197113]).appendArc([237.8445825,-136.5876605],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.1762451,-118.1095582]).appendArc([226.9104346,-117.0170897],{"radius":2,"clockwise":true,"large":false}).appendArc([226.326787,-115.5104076],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.730593,-109.9142136]).appendArc([222.1448066,-106.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([231.25,-106.5]).appendArc([233.25,-104.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([233.25,-24.5]).appendArc([231.25,-22.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.5,-22.5]).appendArc([204.5,-20.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.5,-18.5]).appendArc([202.5,-16.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.5,-16.5]).appendPoint([186.5,-16]).appendArc([184.5,-14],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.5,-14]).appendPoint([168.5,-13.5]).appendArc([166.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([141.5,-11.5]).appendArc([139.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([139.5,-14]).appendPoint([123.5,-14]).appendArc([121.5,-16],{"radius":2,"clockwise":false,"large":false}).appendPoint([121.5,-18]).appendPoint([87.5,-18]).appendArc([85.5,-20],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5,-95]).appendArc([87.5,-97],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
}


function left_raw_extrude_4_outline_fn(){
    return new CSG.Path2D([[356.5,-95],[392.5,-95]]).appendPoint([392.5,-20]).appendPoint([356.5,-20]).appendPoint([356.5,-16]).appendPoint([338.5,-16]).appendPoint([338.5,-13.5]).appendPoint([313.5,-13.5]).appendPoint([313.5,-16]).appendPoint([295.5,-16]).appendPoint([295.5,-18.5]).appendPoint([277.5,-18.5]).appendPoint([277.5,-93.5]).appendPoint([280.1243557,-93.5]).appendPoint([270.4426317,-99.089746]).appendPoint([271.350254,-100.6617938]).appendPoint([255.0874266,-116.9246212]).appendPoint([255.5501349,-117.3873295]).appendPoint([243.8874683,-137.5876605]).appendPoint([264.6720779,-149.5876605]).appendPoint([276.0190571,-129.9341161]).appendPoint([289.7356588,-116.2175144]).appendPoint([289.38457,-115.8664256]).appendPoint([303.0096188,-108]).appendPoint([320.5,-108]).appendPoint([320.5,-105.5]).appendPoint([331.5,-105.5]).appendPoint([331.5,-108]).appendPoint([356.5,-108]).appendPoint([356.5,-95]).close().innerToCAG()
.union(
    new CSG.Path2D([[87.5,-95],[123.5,-95]]).appendPoint([123.5,-108]).appendPoint([148.5,-108]).appendPoint([148.5,-105.5]).appendPoint([159.5,-105.5]).appendPoint([159.5,-108]).appendPoint([176.9903812,-108]).appendPoint([190.61543,-115.8664256]).appendPoint([190.2643412,-116.2175144]).appendPoint([203.9809429,-129.9341161]).appendPoint([215.3279221,-149.5876605]).appendPoint([236.1125317,-137.5876605]).appendPoint([224.4498651,-117.3873295]).appendPoint([224.9125734,-116.9246212]).appendPoint([212.4879522,-104.5]).appendPoint([231.25,-104.5]).appendPoint([231.25,-24.5]).appendPoint([202.5,-24.5]).appendPoint([202.5,-18.5]).appendPoint([184.5,-18.5]).appendPoint([184.5,-16]).appendPoint([166.5,-16]).appendPoint([166.5,-13.5]).appendPoint([141.5,-13.5]).appendPoint([141.5,-16]).appendPoint([123.5,-16]).appendPoint([123.5,-20]).appendPoint([87.5,-20]).appendPoint([87.5,-95]).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
}




                function _left_outer_wall_case_fn() {
                    

                // creating part 0 of case _left_outer_wall
                let _left_outer_wall__part_0 = left_xl_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _left_outer_wall__part_0_bounds = _left_outer_wall__part_0.getBounds();
                let _left_outer_wall__part_0_x = _left_outer_wall__part_0_bounds[0].x + (_left_outer_wall__part_0_bounds[1].x - _left_outer_wall__part_0_bounds[0].x) / 2
                let _left_outer_wall__part_0_y = _left_outer_wall__part_0_bounds[0].y + (_left_outer_wall__part_0_bounds[1].y - _left_outer_wall__part_0_bounds[0].y) / 2
                _left_outer_wall__part_0 = translate([-_left_outer_wall__part_0_x, -_left_outer_wall__part_0_y, 0], _left_outer_wall__part_0);
                _left_outer_wall__part_0 = rotate([0,0,0], _left_outer_wall__part_0);
                _left_outer_wall__part_0 = translate([_left_outer_wall__part_0_x, _left_outer_wall__part_0_y, 0], _left_outer_wall__part_0);

                _left_outer_wall__part_0 = translate([0,0,0], _left_outer_wall__part_0);
                let result = _left_outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function _left_inner_wall_case_fn() {
                    

                // creating part 0 of case _left_inner_wall
                let _left_inner_wall__part_0 = left_raw_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _left_inner_wall__part_0_bounds = _left_inner_wall__part_0.getBounds();
                let _left_inner_wall__part_0_x = _left_inner_wall__part_0_bounds[0].x + (_left_inner_wall__part_0_bounds[1].x - _left_inner_wall__part_0_bounds[0].x) / 2
                let _left_inner_wall__part_0_y = _left_inner_wall__part_0_bounds[0].y + (_left_inner_wall__part_0_bounds[1].y - _left_inner_wall__part_0_bounds[0].y) / 2
                _left_inner_wall__part_0 = translate([-_left_inner_wall__part_0_x, -_left_inner_wall__part_0_y, 0], _left_inner_wall__part_0);
                _left_inner_wall__part_0 = rotate([0,0,0], _left_inner_wall__part_0);
                _left_inner_wall__part_0 = translate([_left_inner_wall__part_0_x, _left_inner_wall__part_0_y, 0], _left_inner_wall__part_0);

                _left_inner_wall__part_0 = translate([0,0,0], _left_inner_wall__part_0);
                let result = _left_inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function left_wall_case_fn() {
                    

                // creating part 0 of case left_wall
                let left_wall__part_0 = _left_outer_wall_case_fn();

                // make sure that rotations are relative
                let left_wall__part_0_bounds = left_wall__part_0.getBounds();
                let left_wall__part_0_x = left_wall__part_0_bounds[0].x + (left_wall__part_0_bounds[1].x - left_wall__part_0_bounds[0].x) / 2
                let left_wall__part_0_y = left_wall__part_0_bounds[0].y + (left_wall__part_0_bounds[1].y - left_wall__part_0_bounds[0].y) / 2
                left_wall__part_0 = translate([-left_wall__part_0_x, -left_wall__part_0_y, 0], left_wall__part_0);
                left_wall__part_0 = rotate([0,0,0], left_wall__part_0);
                left_wall__part_0 = translate([left_wall__part_0_x, left_wall__part_0_y, 0], left_wall__part_0);

                left_wall__part_0 = translate([0,0,0], left_wall__part_0);
                let result = left_wall__part_0;
                
            

                // creating part 1 of case left_wall
                let left_wall__part_1 = _left_inner_wall_case_fn();

                // make sure that rotations are relative
                let left_wall__part_1_bounds = left_wall__part_1.getBounds();
                let left_wall__part_1_x = left_wall__part_1_bounds[0].x + (left_wall__part_1_bounds[1].x - left_wall__part_1_bounds[0].x) / 2
                let left_wall__part_1_y = left_wall__part_1_bounds[0].y + (left_wall__part_1_bounds[1].y - left_wall__part_1_bounds[0].y) / 2
                left_wall__part_1 = translate([-left_wall__part_1_x, -left_wall__part_1_y, 0], left_wall__part_1);
                left_wall__part_1 = rotate([0,0,0], left_wall__part_1);
                left_wall__part_1 = translate([left_wall__part_1_x, left_wall__part_1_y, 0], left_wall__part_1);

                left_wall__part_1 = translate([0,0,0], left_wall__part_1);
                result = result.subtract(left_wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_wall_case_fn();
            }

        
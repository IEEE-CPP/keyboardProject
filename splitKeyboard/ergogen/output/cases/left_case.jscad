function left_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.5,-97],[119.5,-97]]).appendArc([121.5,-99],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.5,-108]).appendArc([123.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.5,-110]).appendArc([150.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.5,-107.5]).appendPoint([157.5,-107.5]).appendPoint([157.5,-108]).appendArc([159.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([175.9185844,-110]).appendArc([176.9185844,-110.2679492],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.3788486,-116.8845358]).appendArc([188.8501276,-117.631728],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.1943601,-130.9759605]).appendArc([202.5121973,-131.3901741],{"radius":2,"clockwise":true,"large":false}).appendPoint([213.5958713,-150.5876605]).appendArc([216.3279221,-151.3197113],{"radius":2,"clockwise":false,"large":false}).appendPoint([237.1125317,-139.3197113]).appendArc([237.8445825,-136.5876605],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.1762451,-118.1095582]).appendArc([226.9104346,-117.0170897],{"radius":2,"clockwise":true,"large":false}).appendArc([226.326787,-115.5104076],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.730593,-109.9142136]).appendArc([222.1448066,-106.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([231.25,-106.5]).appendArc([233.25,-104.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([233.25,-24.5]).appendArc([231.25,-22.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.5,-22.5]).appendArc([204.5,-20.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.5,-18.5]).appendArc([202.5,-16.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.5,-16.5]).appendPoint([186.5,-16]).appendArc([184.5,-14],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.5,-14]).appendPoint([168.5,-13.5]).appendArc([166.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([141.5,-11.5]).appendArc([139.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([139.5,-14]).appendPoint([123.5,-14]).appendArc([121.5,-16],{"radius":2,"clockwise":false,"large":false}).appendPoint([121.5,-18]).appendPoint([87.5,-18]).appendArc([85.5,-20],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5,-95]).appendArc([87.5,-97],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function left_standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[212,-43.5],"radius":2.5})
.union(
    CAG.circle({"center":[212,-68.5],"radius":2.5})
).union(
    CAG.circle({"center":[212,-94.5],"radius":2.5})
).union(
    CAG.circle({"center":[92,-91],"radius":2.5})
).union(
    CAG.circle({"center":[92,-24],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function left_mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[212,-43.5],"radius":1.5})
.union(
    CAG.circle({"center":[212,-68.5],"radius":1.5})
).union(
    CAG.circle({"center":[212,-94.5],"radius":1.5})
).union(
    CAG.circle({"center":[92,-91],"radius":1.5})
).union(
    CAG.circle({"center":[92,-24],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function left_xl_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[87.5,-97],[119.5,-97]]).appendArc([121.5,-99],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.5,-108]).appendArc([123.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.5,-110]).appendArc([150.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.5,-107.5]).appendPoint([157.5,-107.5]).appendPoint([157.5,-108]).appendArc([159.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([175.9185844,-110]).appendArc([176.9185844,-110.2679492],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.3788486,-116.8845358]).appendArc([188.8501276,-117.631728],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.1943601,-130.9759605]).appendArc([202.5121973,-131.3901741],{"radius":2,"clockwise":true,"large":false}).appendPoint([213.5958713,-150.5876605]).appendArc([216.3279221,-151.3197113],{"radius":2,"clockwise":false,"large":false}).appendPoint([237.1125317,-139.3197113]).appendArc([237.8445825,-136.5876605],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.1762451,-118.1095582]).appendArc([226.9104346,-117.0170897],{"radius":2,"clockwise":true,"large":false}).appendArc([226.326787,-115.5104076],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.730593,-109.9142136]).appendArc([222.1448066,-106.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([231.25,-106.5]).appendArc([233.25,-104.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([233.25,-24.5]).appendArc([231.25,-22.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.5,-22.5]).appendArc([204.5,-20.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.5,-18.5]).appendArc([202.5,-16.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.5,-16.5]).appendPoint([186.5,-16]).appendArc([184.5,-14],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.5,-14]).appendPoint([168.5,-13.5]).appendArc([166.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([141.5,-11.5]).appendArc([139.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([139.5,-14]).appendPoint([123.5,-14]).appendArc([121.5,-16],{"radius":2,"clockwise":false,"large":false}).appendPoint([121.5,-18]).appendPoint([87.5,-18]).appendArc([85.5,-20],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5,-95]).appendArc([87.5,-97],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function left_raw_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[87.5,-95],[123.5,-95]]).appendPoint([123.5,-108]).appendPoint([148.5,-108]).appendPoint([148.5,-105.5]).appendPoint([159.5,-105.5]).appendPoint([159.5,-108]).appendPoint([176.9903812,-108]).appendPoint([190.61543,-115.8664256]).appendPoint([190.2643412,-116.2175144]).appendPoint([203.9809429,-129.9341161]).appendPoint([215.3279221,-149.5876605]).appendPoint([236.1125317,-137.5876605]).appendPoint([224.4498651,-117.3873295]).appendPoint([224.9125734,-116.9246212]).appendPoint([212.4879522,-104.5]).appendPoint([231.25,-104.5]).appendPoint([231.25,-24.5]).appendPoint([202.5,-24.5]).appendPoint([202.5,-18.5]).appendPoint([184.5,-18.5]).appendPoint([184.5,-16]).appendPoint([166.5,-16]).appendPoint([166.5,-13.5]).appendPoint([141.5,-13.5]).appendPoint([141.5,-16]).appendPoint([123.5,-16]).appendPoint([123.5,-20]).appendPoint([87.5,-20]).appendPoint([87.5,-95]).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function xl_left_bottom_case_fn() {
                    

                // creating part 0 of case xl_left_bottom
                let xl_left_bottom__part_0 = left_xl_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xl_left_bottom__part_0_bounds = xl_left_bottom__part_0.getBounds();
                let xl_left_bottom__part_0_x = xl_left_bottom__part_0_bounds[0].x + (xl_left_bottom__part_0_bounds[1].x - xl_left_bottom__part_0_bounds[0].x) / 2
                let xl_left_bottom__part_0_y = xl_left_bottom__part_0_bounds[0].y + (xl_left_bottom__part_0_bounds[1].y - xl_left_bottom__part_0_bounds[0].y) / 2
                xl_left_bottom__part_0 = translate([-xl_left_bottom__part_0_x, -xl_left_bottom__part_0_y, 0], xl_left_bottom__part_0);
                xl_left_bottom__part_0 = rotate([0,0,0], xl_left_bottom__part_0);
                xl_left_bottom__part_0 = translate([xl_left_bottom__part_0_x, xl_left_bottom__part_0_y, 0], xl_left_bottom__part_0);

                xl_left_bottom__part_0 = translate([0,0,0], xl_left_bottom__part_0);
                let result = xl_left_bottom__part_0;
                
            
                    return result;
                }
            
            

                function _left_standoffs_case_fn() {
                    

                // creating part 0 of case _left_standoffs
                let _left_standoffs__part_0 = left_standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _left_standoffs__part_0_bounds = _left_standoffs__part_0.getBounds();
                let _left_standoffs__part_0_x = _left_standoffs__part_0_bounds[0].x + (_left_standoffs__part_0_bounds[1].x - _left_standoffs__part_0_bounds[0].x) / 2
                let _left_standoffs__part_0_y = _left_standoffs__part_0_bounds[0].y + (_left_standoffs__part_0_bounds[1].y - _left_standoffs__part_0_bounds[0].y) / 2
                _left_standoffs__part_0 = translate([-_left_standoffs__part_0_x, -_left_standoffs__part_0_y, 0], _left_standoffs__part_0);
                _left_standoffs__part_0 = rotate([0,0,0], _left_standoffs__part_0);
                _left_standoffs__part_0 = translate([_left_standoffs__part_0_x, _left_standoffs__part_0_y, 0], _left_standoffs__part_0);

                _left_standoffs__part_0 = translate([0,0,0], _left_standoffs__part_0);
                let result = _left_standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _left_holes_case_fn() {
                    

                // creating part 0 of case _left_holes
                let _left_holes__part_0 = left_mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _left_holes__part_0_bounds = _left_holes__part_0.getBounds();
                let _left_holes__part_0_x = _left_holes__part_0_bounds[0].x + (_left_holes__part_0_bounds[1].x - _left_holes__part_0_bounds[0].x) / 2
                let _left_holes__part_0_y = _left_holes__part_0_bounds[0].y + (_left_holes__part_0_bounds[1].y - _left_holes__part_0_bounds[0].y) / 2
                _left_holes__part_0 = translate([-_left_holes__part_0_x, -_left_holes__part_0_y, 0], _left_holes__part_0);
                _left_holes__part_0 = rotate([0,0,0], _left_holes__part_0);
                _left_holes__part_0 = translate([_left_holes__part_0_x, _left_holes__part_0_y, 0], _left_holes__part_0);

                _left_holes__part_0 = translate([0,0,0], _left_holes__part_0);
                let result = _left_holes__part_0;
                
            
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
            
            

                function _left_outer_wall_case_fn() {
                    

                // creating part 0 of case _left_outer_wall
                let _left_outer_wall__part_0 = left_xl_extrude_5_6_outline_fn();

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
                let _left_inner_wall__part_0 = left_raw_extrude_5_6_outline_fn();

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
            
            

                function left_case_case_fn() {
                    

                // creating part 0 of case left_case
                let left_case__part_0 = xl_left_bottom_case_fn();

                // make sure that rotations are relative
                let left_case__part_0_bounds = left_case__part_0.getBounds();
                let left_case__part_0_x = left_case__part_0_bounds[0].x + (left_case__part_0_bounds[1].x - left_case__part_0_bounds[0].x) / 2
                let left_case__part_0_y = left_case__part_0_bounds[0].y + (left_case__part_0_bounds[1].y - left_case__part_0_bounds[0].y) / 2
                left_case__part_0 = translate([-left_case__part_0_x, -left_case__part_0_y, 0], left_case__part_0);
                left_case__part_0 = rotate([0,0,0], left_case__part_0);
                left_case__part_0 = translate([left_case__part_0_x, left_case__part_0_y, 0], left_case__part_0);

                left_case__part_0 = translate([0,0,0], left_case__part_0);
                let result = left_case__part_0;
                
            

                // creating part 1 of case left_case
                let left_case__part_1 = _left_standoffs_case_fn();

                // make sure that rotations are relative
                let left_case__part_1_bounds = left_case__part_1.getBounds();
                let left_case__part_1_x = left_case__part_1_bounds[0].x + (left_case__part_1_bounds[1].x - left_case__part_1_bounds[0].x) / 2
                let left_case__part_1_y = left_case__part_1_bounds[0].y + (left_case__part_1_bounds[1].y - left_case__part_1_bounds[0].y) / 2
                left_case__part_1 = translate([-left_case__part_1_x, -left_case__part_1_y, 0], left_case__part_1);
                left_case__part_1 = rotate([0,0,0], left_case__part_1);
                left_case__part_1 = translate([left_case__part_1_x, left_case__part_1_y, 0], left_case__part_1);

                left_case__part_1 = translate([0,0,0], left_case__part_1);
                result = result.union(left_case__part_1);
                
            

                // creating part 2 of case left_case
                let left_case__part_2 = _left_holes_case_fn();

                // make sure that rotations are relative
                let left_case__part_2_bounds = left_case__part_2.getBounds();
                let left_case__part_2_x = left_case__part_2_bounds[0].x + (left_case__part_2_bounds[1].x - left_case__part_2_bounds[0].x) / 2
                let left_case__part_2_y = left_case__part_2_bounds[0].y + (left_case__part_2_bounds[1].y - left_case__part_2_bounds[0].y) / 2
                left_case__part_2 = translate([-left_case__part_2_x, -left_case__part_2_y, 0], left_case__part_2);
                left_case__part_2 = rotate([0,0,0], left_case__part_2);
                left_case__part_2 = translate([left_case__part_2_x, left_case__part_2_y, 0], left_case__part_2);

                left_case__part_2 = translate([0,0,0], left_case__part_2);
                result = result.subtract(left_case__part_2);
                
            

                // creating part 3 of case left_case
                let left_case__part_3 = left_wall_case_fn();

                // make sure that rotations are relative
                let left_case__part_3_bounds = left_case__part_3.getBounds();
                let left_case__part_3_x = left_case__part_3_bounds[0].x + (left_case__part_3_bounds[1].x - left_case__part_3_bounds[0].x) / 2
                let left_case__part_3_y = left_case__part_3_bounds[0].y + (left_case__part_3_bounds[1].y - left_case__part_3_bounds[0].y) / 2
                left_case__part_3 = translate([-left_case__part_3_x, -left_case__part_3_y, 0], left_case__part_3);
                left_case__part_3 = rotate([0,0,0], left_case__part_3);
                left_case__part_3 = translate([left_case__part_3_x, left_case__part_3_y, 0], left_case__part_3);

                left_case__part_3 = translate([0,0,0], left_case__part_3);
                result = result.union(left_case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_case_case_fn();
            }

        
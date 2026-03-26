function right_xl_extrude_4_outline_fn(){
    return new CSG.Path2D([[360.5,-97],[392.5,-97]]).appendArc([394.5,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([394.5,-20]).appendArc([392.5,-18],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5,-18]).appendPoint([358.5,-16]).appendArc([356.5,-14],{"radius":2,"clockwise":false,"large":false}).appendPoint([340.5,-14]).appendPoint([340.5,-13.5]).appendArc([338.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([313.5,-11.5]).appendArc([311.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([311.5,-14]).appendPoint([295.5,-14]).appendArc([293.5,-16],{"radius":2,"clockwise":false,"large":false}).appendPoint([293.5,-16.5]).appendPoint([277.5,-16.5]).appendArc([275.5,-18.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([275.5,-20.5]).appendArc([273.5,-22.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([248.75,-22.5]).appendArc([246.75,-24.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.75,-104.5]).appendArc([248.75,-106.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([257.8551934,-106.5]).appendArc([259.269407,-109.9142136],{"radius":2,"clockwise":true,"large":false}).appendPoint([253.673213,-115.5104076]).appendArc([253.0895653,-117.0170897],{"radius":2,"clockwise":false,"large":false}).appendArc([252.8237549,-118.1095582],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.1554175,-136.5876605]).appendArc([242.8874683,-139.3197113],{"radius":2,"clockwise":false,"large":false}).appendPoint([263.6720779,-151.3197113]).appendArc([266.4041287,-150.5876605],{"radius":2,"clockwise":false,"large":false}).appendPoint([277.4878027,-131.3901741]).appendArc([277.8056399,-130.9759605],{"radius":2,"clockwise":true,"large":false}).appendPoint([291.1498724,-117.631728]).appendArc([291.6211514,-116.8845358],{"radius":2,"clockwise":false,"large":false}).appendPoint([303.0814156,-110.2679492]).appendArc([304.0814156,-110],{"radius":2,"clockwise":true,"large":false}).appendPoint([320.5,-110]).appendArc([322.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.5,-107.5]).appendPoint([329.5,-107.5]).appendPoint([329.5,-108]).appendArc([331.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([356.5,-110]).appendArc([358.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5,-99]).appendArc([360.5,-97],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function right_raw_extrude_4_outline_fn(){
    return new CSG.Path2D([[356.5,-95],[392.5,-95]]).appendPoint([392.5,-20]).appendPoint([356.5,-20]).appendPoint([356.5,-16]).appendPoint([338.5,-16]).appendPoint([338.5,-13.5]).appendPoint([313.5,-13.5]).appendPoint([313.5,-16]).appendPoint([295.5,-16]).appendPoint([295.5,-18.5]).appendPoint([277.5,-18.5]).appendPoint([277.5,-24.5]).appendPoint([248.75,-24.5]).appendPoint([248.75,-104.5]).appendPoint([267.5120478,-104.5]).appendPoint([255.0874266,-116.9246212]).appendPoint([255.5501349,-117.3873295]).appendPoint([243.8874683,-137.5876605]).appendPoint([264.6720779,-149.5876605]).appendPoint([276.0190571,-129.9341161]).appendPoint([289.7356588,-116.2175144]).appendPoint([289.38457,-115.8664256]).appendPoint([303.0096188,-108]).appendPoint([320.5,-108]).appendPoint([320.5,-105.5]).appendPoint([331.5,-105.5]).appendPoint([331.5,-108]).appendPoint([356.5,-108]).appendPoint([356.5,-95]).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _right_outer_wall_case_fn() {
                    

                // creating part 0 of case _right_outer_wall
                let _right_outer_wall__part_0 = right_xl_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _right_outer_wall__part_0_bounds = _right_outer_wall__part_0.getBounds();
                let _right_outer_wall__part_0_x = _right_outer_wall__part_0_bounds[0].x + (_right_outer_wall__part_0_bounds[1].x - _right_outer_wall__part_0_bounds[0].x) / 2
                let _right_outer_wall__part_0_y = _right_outer_wall__part_0_bounds[0].y + (_right_outer_wall__part_0_bounds[1].y - _right_outer_wall__part_0_bounds[0].y) / 2
                _right_outer_wall__part_0 = translate([-_right_outer_wall__part_0_x, -_right_outer_wall__part_0_y, 0], _right_outer_wall__part_0);
                _right_outer_wall__part_0 = rotate([0,0,0], _right_outer_wall__part_0);
                _right_outer_wall__part_0 = translate([_right_outer_wall__part_0_x, _right_outer_wall__part_0_y, 0], _right_outer_wall__part_0);

                _right_outer_wall__part_0 = translate([0,0,0], _right_outer_wall__part_0);
                let result = _right_outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function _right_inner_wall_case_fn() {
                    

                // creating part 0 of case _right_inner_wall
                let _right_inner_wall__part_0 = right_raw_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _right_inner_wall__part_0_bounds = _right_inner_wall__part_0.getBounds();
                let _right_inner_wall__part_0_x = _right_inner_wall__part_0_bounds[0].x + (_right_inner_wall__part_0_bounds[1].x - _right_inner_wall__part_0_bounds[0].x) / 2
                let _right_inner_wall__part_0_y = _right_inner_wall__part_0_bounds[0].y + (_right_inner_wall__part_0_bounds[1].y - _right_inner_wall__part_0_bounds[0].y) / 2
                _right_inner_wall__part_0 = translate([-_right_inner_wall__part_0_x, -_right_inner_wall__part_0_y, 0], _right_inner_wall__part_0);
                _right_inner_wall__part_0 = rotate([0,0,0], _right_inner_wall__part_0);
                _right_inner_wall__part_0 = translate([_right_inner_wall__part_0_x, _right_inner_wall__part_0_y, 0], _right_inner_wall__part_0);

                _right_inner_wall__part_0 = translate([0,0,0], _right_inner_wall__part_0);
                let result = _right_inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function right_wall_case_fn() {
                    

                // creating part 0 of case right_wall
                let right_wall__part_0 = _right_outer_wall_case_fn();

                // make sure that rotations are relative
                let right_wall__part_0_bounds = right_wall__part_0.getBounds();
                let right_wall__part_0_x = right_wall__part_0_bounds[0].x + (right_wall__part_0_bounds[1].x - right_wall__part_0_bounds[0].x) / 2
                let right_wall__part_0_y = right_wall__part_0_bounds[0].y + (right_wall__part_0_bounds[1].y - right_wall__part_0_bounds[0].y) / 2
                right_wall__part_0 = translate([-right_wall__part_0_x, -right_wall__part_0_y, 0], right_wall__part_0);
                right_wall__part_0 = rotate([0,0,0], right_wall__part_0);
                right_wall__part_0 = translate([right_wall__part_0_x, right_wall__part_0_y, 0], right_wall__part_0);

                right_wall__part_0 = translate([0,0,0], right_wall__part_0);
                let result = right_wall__part_0;
                
            

                // creating part 1 of case right_wall
                let right_wall__part_1 = _right_inner_wall_case_fn();

                // make sure that rotations are relative
                let right_wall__part_1_bounds = right_wall__part_1.getBounds();
                let right_wall__part_1_x = right_wall__part_1_bounds[0].x + (right_wall__part_1_bounds[1].x - right_wall__part_1_bounds[0].x) / 2
                let right_wall__part_1_y = right_wall__part_1_bounds[0].y + (right_wall__part_1_bounds[1].y - right_wall__part_1_bounds[0].y) / 2
                right_wall__part_1 = translate([-right_wall__part_1_x, -right_wall__part_1_y, 0], right_wall__part_1);
                right_wall__part_1 = rotate([0,0,0], right_wall__part_1);
                right_wall__part_1 = translate([right_wall__part_1_x, right_wall__part_1_y, 0], right_wall__part_1);

                right_wall__part_1 = translate([0,0,0], right_wall__part_1);
                result = result.subtract(right_wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_wall_case_fn();
            }

        
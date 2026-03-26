function right_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[360.5,-97],[392.5,-97]]).appendArc([394.5,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([394.5,-20]).appendArc([392.5,-18],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5,-18]).appendPoint([358.5,-16]).appendArc([356.5,-14],{"radius":2,"clockwise":false,"large":false}).appendPoint([340.5,-14]).appendPoint([340.5,-13.5]).appendArc([338.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([313.5,-11.5]).appendArc([311.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([311.5,-14]).appendPoint([295.5,-14]).appendArc([293.5,-16],{"radius":2,"clockwise":false,"large":false}).appendPoint([293.5,-16.5]).appendPoint([277.5,-16.5]).appendArc([275.5,-18.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([275.5,-20.5]).appendArc([273.5,-22.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([248.75,-22.5]).appendArc([246.75,-24.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.75,-104.5]).appendArc([248.75,-106.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([257.8551934,-106.5]).appendArc([259.269407,-109.9142136],{"radius":2,"clockwise":true,"large":false}).appendPoint([253.673213,-115.5104076]).appendArc([253.0895653,-117.0170897],{"radius":2,"clockwise":false,"large":false}).appendArc([252.8237549,-118.1095582],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.1554175,-136.5876605]).appendArc([242.8874683,-139.3197113],{"radius":2,"clockwise":false,"large":false}).appendPoint([263.6720779,-151.3197113]).appendArc([266.4041287,-150.5876605],{"radius":2,"clockwise":false,"large":false}).appendPoint([277.4878027,-131.3901741]).appendArc([277.8056399,-130.9759605],{"radius":2,"clockwise":true,"large":false}).appendPoint([291.1498724,-117.631728]).appendArc([291.6211514,-116.8845358],{"radius":2,"clockwise":false,"large":false}).appendPoint([303.0814156,-110.2679492]).appendArc([304.0814156,-110],{"radius":2,"clockwise":true,"large":false}).appendPoint([320.5,-110]).appendArc([322.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.5,-107.5]).appendPoint([329.5,-107.5]).appendPoint([329.5,-108]).appendArc([331.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([356.5,-110]).appendArc([358.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5,-99]).appendArc([360.5,-97],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xl_right_bottom_case_fn() {
                    

                // creating part 0 of case xl_right_bottom
                let xl_right_bottom__part_0 = right_xl_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xl_right_bottom__part_0_bounds = xl_right_bottom__part_0.getBounds();
                let xl_right_bottom__part_0_x = xl_right_bottom__part_0_bounds[0].x + (xl_right_bottom__part_0_bounds[1].x - xl_right_bottom__part_0_bounds[0].x) / 2
                let xl_right_bottom__part_0_y = xl_right_bottom__part_0_bounds[0].y + (xl_right_bottom__part_0_bounds[1].y - xl_right_bottom__part_0_bounds[0].y) / 2
                xl_right_bottom__part_0 = translate([-xl_right_bottom__part_0_x, -xl_right_bottom__part_0_y, 0], xl_right_bottom__part_0);
                xl_right_bottom__part_0 = rotate([0,0,0], xl_right_bottom__part_0);
                xl_right_bottom__part_0 = translate([xl_right_bottom__part_0_x, xl_right_bottom__part_0_y, 0], xl_right_bottom__part_0);

                xl_right_bottom__part_0 = translate([0,0,0], xl_right_bottom__part_0);
                let result = xl_right_bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xl_right_bottom_case_fn();
            }

        
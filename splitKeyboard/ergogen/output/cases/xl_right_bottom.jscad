function right_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.5,-97],[121.5,-97]]).appendPoint([121.5,-108]).appendArc([123.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.5,-110]).appendArc([150.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.5,-107.5]).appendPoint([157.5,-107.5]).appendPoint([157.5,-108]).appendArc([159.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([176.4544828,-110]).appendPoint([188.3788486,-116.8845358]).appendArc([188.8501276,-117.631728],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.3805447,-131.1621451]).appendPoint([213.5958713,-150.5876605]).appendArc([216.3279221,-151.3197113],{"radius":2,"clockwise":false,"large":false}).appendPoint([237.1125317,-139.3197113]).appendArc([237.8445825,-136.5876605],{"radius":2,"clockwise":false,"large":false}).appendPoint([226.8267498,-117.5042146]).appendArc([226.326787,-115.5104076],{"radius":2,"clockwise":false,"large":false}).appendPoint([211.1491239,-100.3327446]).appendPoint([211.2894191,-100.089746]).appendArc([210.5573682,-97.3576952],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.4703106,-93.8433308]).appendArc([204.5,-93.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.5,-18.5]).appendArc([202.5,-16.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.5,-16.5]).appendPoint([186.5,-16]).appendArc([184.5,-14],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.5,-14]).appendPoint([168.5,-13.5]).appendArc([166.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([141.5,-11.5]).appendArc([139.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([139.5,-14]).appendPoint([123.5,-14]).appendArc([121.5,-16],{"radius":2,"clockwise":false,"large":false}).appendPoint([121.5,-18]).appendPoint([87.5,-18]).appendArc([85.5,-20],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5,-95]).appendArc([87.5,-97],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[358.5,-97],[392.5,-97]]).appendArc([394.5,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([394.5,-20]).appendArc([392.5,-18],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5,-18]).appendPoint([358.5,-16]).appendArc([356.5,-14],{"radius":2,"clockwise":false,"large":false}).appendPoint([340.5,-14]).appendPoint([340.5,-13.5]).appendArc([338.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([313.5,-11.5]).appendArc([311.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([311.5,-14]).appendPoint([295.5,-14]).appendArc([293.5,-16],{"radius":2,"clockwise":false,"large":false}).appendPoint([293.5,-16.5]).appendPoint([277.5,-16.5]).appendArc([275.5,-18.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([275.5,-22.5]).appendPoint([248.75,-22.5]).appendArc([246.75,-24.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.75,-104.5]).appendArc([248.75,-106.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([262.6836206,-106.5]).appendPoint([253.673213,-115.5104076]).appendArc([253.1732502,-117.5042146],{"radius":2,"clockwise":false,"large":false}).appendPoint([242.1554175,-136.5876605]).appendArc([242.8874683,-139.3197113],{"radius":2,"clockwise":false,"large":false}).appendPoint([263.6720779,-151.3197113]).appendArc([266.4041287,-150.5876605],{"radius":2,"clockwise":false,"large":false}).appendPoint([277.6194553,-131.1621451]).appendPoint([291.1498724,-117.631728]).appendArc([291.6211514,-116.8845358],{"radius":2,"clockwise":false,"large":false}).appendPoint([303.5455172,-110]).appendPoint([320.5,-110]).appendArc([322.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.5,-107.5]).appendPoint([329.5,-107.5]).appendPoint([329.5,-108]).appendArc([331.5,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([356.5,-110]).appendArc([358.5,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5,-97]).close().innerToCAG()
).extrude({ offset: [0, 0, 1] });
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

        
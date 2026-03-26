function right_raw_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.5,-95],[123.5,-95]]).appendPoint([123.5,-108]).appendPoint([148.5,-108]).appendPoint([148.5,-105.5]).appendPoint([159.5,-105.5]).appendPoint([159.5,-108]).appendPoint([176.9903812,-108]).appendPoint([190.61543,-115.8664256]).appendPoint([190.2643412,-116.2175144]).appendPoint([203.9809429,-129.9341161]).appendPoint([215.3279221,-149.5876605]).appendPoint([236.1125317,-137.5876605]).appendPoint([224.4498651,-117.3873295]).appendPoint([224.9125734,-116.9246212]).appendPoint([208.649746,-100.6617938]).appendPoint([209.5573683,-99.089746]).appendPoint([199.8756443,-93.5]).appendPoint([202.5,-93.5]).appendPoint([202.5,-18.5]).appendPoint([184.5,-18.5]).appendPoint([184.5,-16]).appendPoint([166.5,-16]).appendPoint([166.5,-13.5]).appendPoint([141.5,-13.5]).appendPoint([141.5,-16]).appendPoint([123.5,-16]).appendPoint([123.5,-20]).appendPoint([87.5,-20]).appendPoint([87.5,-95]).close().innerToCAG()
.union(
    new CSG.Path2D([[356.5,-95],[392.5,-95]]).appendPoint([392.5,-20]).appendPoint([356.5,-20]).appendPoint([356.5,-16]).appendPoint([338.5,-16]).appendPoint([338.5,-13.5]).appendPoint([313.5,-13.5]).appendPoint([313.5,-16]).appendPoint([295.5,-16]).appendPoint([295.5,-18.5]).appendPoint([277.5,-18.5]).appendPoint([277.5,-24.5]).appendPoint([248.75,-24.5]).appendPoint([248.75,-104.5]).appendPoint([267.5120478,-104.5]).appendPoint([255.0874266,-116.9246212]).appendPoint([255.5501349,-117.3873295]).appendPoint([243.8874683,-137.5876605]).appendPoint([264.6720779,-149.5876605]).appendPoint([276.0190571,-129.9341161]).appendPoint([289.7356588,-116.2175144]).appendPoint([289.38457,-115.8664256]).appendPoint([303.0096188,-108]).appendPoint([320.5,-108]).appendPoint([320.5,-105.5]).appendPoint([331.5,-105.5]).appendPoint([331.5,-108]).appendPoint([356.5,-108]).appendPoint([356.5,-95]).close().innerToCAG()
).extrude({ offset: [0, 0, 1] });
}




                function right_bottom_case_fn() {
                    

                // creating part 0 of case right_bottom
                let right_bottom__part_0 = right_raw_extrude_1_outline_fn();

                // make sure that rotations are relative
                let right_bottom__part_0_bounds = right_bottom__part_0.getBounds();
                let right_bottom__part_0_x = right_bottom__part_0_bounds[0].x + (right_bottom__part_0_bounds[1].x - right_bottom__part_0_bounds[0].x) / 2
                let right_bottom__part_0_y = right_bottom__part_0_bounds[0].y + (right_bottom__part_0_bounds[1].y - right_bottom__part_0_bounds[0].y) / 2
                right_bottom__part_0 = translate([-right_bottom__part_0_x, -right_bottom__part_0_y, 0], right_bottom__part_0);
                right_bottom__part_0 = rotate([0,0,0], right_bottom__part_0);
                right_bottom__part_0 = translate([right_bottom__part_0_x, right_bottom__part_0_y, 0], right_bottom__part_0);

                right_bottom__part_0 = translate([0,0,0], right_bottom__part_0);
                let result = right_bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_bottom_case_fn();
            }

        
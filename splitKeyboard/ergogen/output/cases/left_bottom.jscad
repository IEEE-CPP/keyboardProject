function left_raw_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.5,-95],[123.5,-95]]).appendPoint([123.5,-108]).appendPoint([148.5,-108]).appendPoint([148.5,-105.5]).appendPoint([159.5,-105.5]).appendPoint([159.5,-108]).appendPoint([176.9903812,-108]).appendPoint([190.61543,-115.8664256]).appendPoint([190.2643412,-116.2175144]).appendPoint([203.9809429,-129.9341161]).appendPoint([215.3279221,-149.5876605]).appendPoint([236.1125317,-137.5876605]).appendPoint([224.4498651,-117.3873295]).appendPoint([224.9125734,-116.9246212]).appendPoint([212.4879522,-104.5]).appendPoint([231.25,-104.5]).appendPoint([231.25,-24.5]).appendPoint([202.5,-24.5]).appendPoint([202.5,-18.5]).appendPoint([184.5,-18.5]).appendPoint([184.5,-16]).appendPoint([166.5,-16]).appendPoint([166.5,-13.5]).appendPoint([141.5,-13.5]).appendPoint([141.5,-16]).appendPoint([123.5,-16]).appendPoint([123.5,-20]).appendPoint([87.5,-20]).appendPoint([87.5,-95]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function left_bottom_case_fn() {
                    

                // creating part 0 of case left_bottom
                let left_bottom__part_0 = left_raw_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_bottom__part_0_bounds = left_bottom__part_0.getBounds();
                let left_bottom__part_0_x = left_bottom__part_0_bounds[0].x + (left_bottom__part_0_bounds[1].x - left_bottom__part_0_bounds[0].x) / 2
                let left_bottom__part_0_y = left_bottom__part_0_bounds[0].y + (left_bottom__part_0_bounds[1].y - left_bottom__part_0_bounds[0].y) / 2
                left_bottom__part_0 = translate([-left_bottom__part_0_x, -left_bottom__part_0_y, 0], left_bottom__part_0);
                left_bottom__part_0 = rotate([0,0,0], left_bottom__part_0);
                left_bottom__part_0 = translate([left_bottom__part_0_x, left_bottom__part_0_y, 0], left_bottom__part_0);

                left_bottom__part_0 = translate([0,0,0], left_bottom__part_0);
                let result = left_bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_bottom_case_fn();
            }

        
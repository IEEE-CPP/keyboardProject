# Split Keyboard

A custom split ergonomic keyboard designed with Ergogen and KiCad.

## Keyboard Layout

- **5-column layout**: outer, pinky, ring, middle, index, inner
- **5 rows**: mod, bottom, home, top, num
- **3-thumb keys**: layer, space, extra
- **Column-based wiring** with row diodes

### Features

- Choc hotswap sockets (Kailh Choc low-profile switches)
- Pro Micro microcontroller (ATmega32U4)
- OLED displays (SSD1306, I2C)
- TRRS jack for inter-board communication
- ESD protection on TRRS data lines
- Reset button
- 3D printable case files (STL)

## Files

```
splitKeyboard/
├── ergogen/
│   ├── config.yaml    # Ergogen configuration (layout, PCB definitions)
│   ├── footprints/    # Custom footprint definitions
│   └── output/
│       ├── cases/    # 3D printable case files (STL)
│       └── outlines/ # DXF files for CNC cutting
└── kicad/
    ├── left_board.kicad_pcb   # Left half PCB design
    └── right_board.kicad_pcb  # Right half PCB design
```

## Development Setup

### Manual (recommended)

Install ergogen from https://ergogen.xyz/install/, then generate PCBs:

```bash
ergogen splitKeyboard/ergogen/ --output build/
```

### Nix (optional)

For users with Nix installed:

```bash
nix develop    # provides kicad + ergogen
generate       # runs ergogen (PCB + cases) and organizes output
```

## Design Details

- **Microcontroller**: Pro Micro (5V, 16MHz)
- **Key switches**: Kailh Choc (low-profile)
- **Diodes**: 1N4148 (or similar)
- **OLED**: SSD1306 128x32 I2C
- **Interconnect**: TRRS cable (4-pole)
- **ESD Protection**: TVS diodes (PRTR5V0U2X or similar)

### Pin Mapping

| Column | Pin |
| ------ | --- |
| outer  | P21 |
| pinky  | P20 |
| ring   | P19 |
| middle | P18 |
| index  | P15 |
| inner  | P14 |
| thumb  | P16 |
| space  | P10 |
| extra  | P9  |

| Row    | Pin |
| ------ | --- |
| mod    | P8  |
| bottom | P7  |
| home   | P6  |
| top    | P5  |
| num    | P4  |

### OLED

- SDA: P2
- SCL: P3

## Building

1. Generate PCB files (see Development Setup above)

2. Open `splitKeyboard/kicad/` in KiCad to generate Gerbers

3. Order PCBs from your preferred manufacturer

4. Solder components:
   - Diodes (observe polarity)
   - Hotswap sockets
   - TRRS jack
   - Reset button
   - OLED display
   - Pro Micro header pins (or socket)

5. Flash firmware using QMK or ZMK

## Firmware

This repository only contains the hardware design. For firmware, use:

- **QMK**: https://github.com/qmk/qmk_firmware
- **ZMK**: https://github.com/zmkfirmware/zmk

## License

GNU General Public License v3. See [LICENSE](LICENSE) for details.

## Credits

- [Ergogen](https://github.com/ergogen/ergogen) - Keyboard layout generator
- [KiCad](https://www.kicad.org/) - PCB design software

{
  description = "Description for the project";

  inputs = {
    devshell.url = "github:numtide/devshell";
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.devshell.flakeModule
      ];
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem =
        {
          config,
          self',
          inputs',
          pkgs,
          system,
          ...
        }:
        {
          devshells.default = {
            packages = with pkgs; [
              kicad
              ergogen
            ];
            commands = [
              {
                name = "generate";
                help = "Run ergogen and move output to kicad folder";
                command = ''
                  CONFIG="splitKeyboard/ergogen/"
                  OUTPUT="splitKeyboard/ergogen/output"
                  KICAD_DIR="splitKeyboard/kicad"

                  ergogen "$CONFIG" --output "$OUTPUT"
                  rm -f "$KICAD_DIR/left_board.kicad_pcb" "$KICAD_DIR/right_board.kicad_pcb"
                  mv "$OUTPUT/pcbs/left_board.kicad_pcb" "$KICAD_DIR/"
                  mv "$OUTPUT/pcbs/right_board.kicad_pcb" "$KICAD_DIR/"
                '';
              }
            ];
          };
        };

      flake = {
        # The usual flake attributes can be defined here, including system-
        # agnostic ones like nixosModule and system-enumerating ones, although
        # those are more easily expressed in perSystem.

      };
    };
}

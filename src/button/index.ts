import OriginButton from "./Button";
import Fab from "./Fab";
import ExtendedFab from "./ExtendedFab";

export type ButtonProps = typeof OriginButton & {
  Fab: typeof Fab;
  ExtendedFab: typeof ExtendedFab;
};

const Button = OriginButton as ButtonProps;
Button.Fab = Fab;
Button.ExtendedFab = ExtendedFab;

export default Button;

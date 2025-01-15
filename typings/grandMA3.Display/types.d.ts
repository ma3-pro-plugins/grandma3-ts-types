type YesNo = 'Yes' | 'No';
type BooleanString = 'true' | 'false';
/**
 * Either an object, or a string of comma delimited values.
 * The string can be:
 * - "X,Y": where X is the anchor value for left and right anchors, and Y is the anchor value for top and bottom anchors
 * - "L,T,R,B": where L is the anchor value for left, T is the anchor value for top, R is the anchor value for right, and B is the anchor value for bottom
 */
type Anchors =
	| {
			left: number;
			right: number;
			top: number;
			bottom: number;
	  }
	| `${number},${number}`
	| `${number},${number},${number},${number}`;

type Padding =
	| {
			left: number;
			right: number;
			top: number;
			bottom: number;
	  }
	| `${number}` // All sides
	| `${number},${number}` // Left/Right, Top/Bottom
	| `${number},${number},${number},${number}`;

type Margin =
	| {
			left: number;
			right: number;
			top: number;
			bottom: number;
	  }
	| `${number}`
	| `${number},${number}`
	| `${number},${number},${number},${number}`;

/**
 * "minWminH" or "minW,minH"
 */
type MAUISize = `${number}` | `${number},${number}`;

type Focus = 'InitialFocus' | 'Never' | 'CanHaveFocus' | 'WantsFocus' | 'TabOnly';
type Percentage = `${number}%`;
type Width = number | Percentage;
type Height = number | Percentage;

type SizePolicy = 'Fixed' | 'Content' | 'Stretch';
type AlignmentH = 'Left' | 'Center' | 'Right';
type AlignmentV = 'Top' | 'Center' | 'Bottom';

type Font =
	| 'console32'
	| 'console28'
	| 'console24'
	| 'console20'
	| 'console18'
	| 'console16'
	| 'console14'
	| 'console12'
	| 'console10'
	| 'console8'
	| 'Medium20'
	| 'Regular32'
	| 'Regular28'
	| 'Regular24'
	| 'Regular20'
	| 'Regular18'
	| 'Regular16'
	| 'Regular14'
	| 'Regular11'
	| 'Regular9';

type SignalId = string | `:${string}`;

type VKPluginName =
	| 'CueNumberInput'
	| 'IP4Prefix'
	| 'NumericInput'
	| 'RelCueNumberInput'
	| 'TextInput'
	| 'TextInputNumOnly'
	| 'TextInputNumOnlyRange'
	| 'TextInputTimeOnly';

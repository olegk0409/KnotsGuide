import { Knot, QuizItem } from "./types";

export const onboardingSlides = [
  {
    title: "Master Fishing Knots",
    desc: "Access a comprehensive library of essential fishing knots with detailed step-by-step instructions.",
    image: require("@/assets/images/knowledge.png"),
  },
  {
    title: "Filter & Find Fast",
    desc: "Search and filter knots by category, difficulty level, and line type to find exactly what you need.",
    image: require("@/assets/images/knowledge.png"),
  },
  {
    title: "Test Your Knowledge",
    desc: "Challenge yourself with quizzes covering knot techniques, safety tips, and best practices.",
    image: require("@/assets/images/knowledge.png"),
  },
];

export const knots: Knot[] = [
  {
    category: "Multi-Purpose",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Universal Knot",
    img: require('@/assets/images/knots/1.png'),
    tyingInstructions: [
      "Thread the line through the hook or lure eye.",
      "Wrap the tag end around the standing line 5–7 times.",
      "Pass the tag end back through the loop near the eye.",
      "Wet the line, pull both ends slowly, and tighten evenly."
    ],
    purpose:
      "A versatile, all-in-one knot that can be used for hooks, lures, or even joining two lines when doubled.",
    whenToUse:
      "Ideal when you need one reliable knot for any fishing setup — quick to tie, strong, and works in most conditions.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: ["Hooks", "Swivels", "Lures", "Line-to-Line connections"]
  },
  {
    category: "Multi-Purpose",
    difficulty: 'Intermediate',
    emoji: "🪢",
    name: "Uni Knot",
    img: require('@/assets/images/knots/2.png'),
    tyingInstructions: [
      "Pass the line through the eye and form a loop back along the standing line.",
      "Wrap the tag end around the double line 5–7 times.",
      "Moisten the line and pull the tag to snug coils.",
      "Slide the knot down to the eye and tighten firmly."
    ],
    purpose:
      "A dependable, easy-to-learn knot for attaching line to hooks, swivels, or lures — known for strength and simplicity.",
    whenToUse:
      "Use the Uni Knot when you want a single knot type that handles multiple jobs and performs well in all conditions.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: ["Hooks", "Lures", "Swivels", "Line-to-Line (as Double Uni Knot)"]
  },
  {
    category: "Multi-Purpose",
    difficulty: 'Intermediate',
    emoji: "🪢",
    name: "Improved Clinch Knot",
    img: require('@/assets/images/knots/3.png'),
    tyingInstructions: [
      "Thread the line through the hook eye and wrap the tag around the standing line 5–7 times.",
      "Pass the tag through the small loop above the eye.",
      "Then feed the tag through the large loop just formed.",
      "Moisten and tighten by pulling on the standing line."
    ],
    purpose:
      "One of the most classic and trusted knots for securing line to terminal tackle.",
    whenToUse:
      "Ideal for light to medium tackle and monofilament lines — quick, efficient, and strong.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon"],
    useCases: ["Hooks", "Lures", "Swivels"]
  },
  {
    category: "Multi-Purpose",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Palomar Knot",
    img: require('@/assets/images/knots/5.png'),
    tyingInstructions: [
      "Double about 15–20 cm of line and pass the loop through the hook eye.",
      "Tie a loose overhand knot with the doubled line.",
      "Pass the hook or lure through the loop.",
      "Wet and pull both ends to seat the knot firmly."
    ],
    purpose:
      "A compact, high-strength knot especially effective with braided line.",
    whenToUse:
      "Perfect for tying braided line to hooks or lures where maximum strength and minimal slippage are needed.",
    compatibleLineTypes: ["Braid", "Monofilament", "Fluorocarbon"],
    useCases: ["Hooks", "Lures", "Swivels"]
  },
  {
    category: "Multi-Purpose",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Trilene Knot",
    img: require('@/assets/images/knots/4.png'),
    tyingInstructions: [
      "Pass the line through the eye twice to form a small loop.",
      "Wrap the tag end around the standing line 5–6 times.",
      "Feed the tag through the double loop near the eye.",
      "Moisten and pull both ends evenly to tighten."
    ],
    purpose:
      "A strong, double-loop knot designed to increase holding power on hooks and lures.",
    whenToUse:
      "Best for securing lures and hooks when you need extra friction and security, especially with slippery fluorocarbon.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon"],
    useCases: ["Hooks", "Lures", "Swivels"]
  },
  {
    category: "Hook & Lure",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Snell Knot (Standard / Uni-Snell)",
    img: require('@/assets/images/knots/6.png'),
    tyingInstructions: [
      "Pass the tag end through the hook eye toward the point.",
      "Lay the tag along the shank to form a loop.",
      "Wrap the loop around the shank and line 6–8 times.",
      "Pull the tag to tighten the coils, then pull the standing line to secure."
    ],
    purpose:
      "Creates a straight, strong connection between hook and line — perfect for maximizing hook penetration.",
    whenToUse:
      "Use with straight-eye or turned-down-eye hooks for live bait or bottom rigs where a straight pull increases hookup efficiency.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: ["Live bait rigs", "Bottom fishing", "Circle hooks"]
  },
  {
    category: "Hook & Lure",
    difficulty: 'Intermediate',
    emoji: "🪢",
    name: "Non-Slip Mono Loop (Loop Knot)",
    img: require('@/assets/images/knots/7.png'),
    tyingInstructions: [
      "Tie a loose overhand knot in the line, leaving 10–12 cm tag.",
      "Pass the tag through the lure or hook eye, then back through the overhand loop.",
      "Wrap the tag around the standing line 4–6 times.",
      "Bring the tag back through the overhand loop near the eye.",
      "Moisten and pull the standing line to set the loop size."
    ],
    purpose:
      "Forms a strong loop that allows lures or flies to move freely for natural action.",
    whenToUse:
      "Ideal when fishing with crankbaits, jigs, or flies where lure movement improves presentation.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon"],
    useCases: ["Lures", "Flies", "Jigs"]
  },
  {
    category: "Hook & Lure",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Orvis Knot",
    img: require('@/assets/images/knots/8.png'),
    tyingInstructions: [
      "Pass the tag through the hook eye and form a loop behind the standing line.",
      "Wrap the tag around both lines and through the loop twice.",
      "Moisten and pull the tag to snug the wraps.",
      "Tighten by pulling both the tag and standing line together."
    ],
    purpose:
      "Compact, high-strength knot developed for fly fishing — reliable yet quick to tie.",
    whenToUse:
      "Perfect for connecting tippet to hook or fly when small, streamlined knots are preferred.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon"],
    useCases: ["Flies", "Hooks", "Light tackle setups"]
  },
  {
    category: "Hook & Lure",
    difficulty: 'Intermediate',
    emoji: "🪢",
    name: "Davy Knot",
    img: require('@/assets/images/knots/9.png'),
    tyingInstructions: [
      "Pass the tag through the hook or fly eye.",
      "Make a small overhand loop near the eye.",
      "Pass the tag behind the standing line and through the loop.",
      "Tighten gently by pulling both ends."
    ],
    purpose:
      "Extremely small and quick knot ideal for fine tippets and small flies.",
    whenToUse:
      "Use for delicate fly presentations where minimal bulk and quick tying are important.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon"],
    useCases: ["Fly hooks", "Light leaders", "Trout fishing"]
  },
  {
    category: "Hook & Lure",
    difficulty: 'Intermediate',
    emoji: "🪢",
    name: "San Diego Jam Knot",
    img: require('@/assets/images/knots/10.png'),
    tyingInstructions: [
      "Pass the line through the hook eye and double it back 10–15 cm.",
      "Hold the tag and standing line together and wrap the tag around both 6–7 times.",
      "Pass the tag through the loop near the hook, then through the large loop just formed.",
      "Moisten and pull slowly to tighten."
    ],
    purpose:
      "A powerful, reliable knot for heavy tackle and big game fishing.",
    whenToUse:
      "Ideal for saltwater or heavy freshwater setups, especially when maximum knot strength is critical.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: ["Heavy lures", "Offshore rigs", "Large hooks"]
  },
  {
    category: "Hook & Lure",
    difficulty: 'Advanced',
    emoji: "🪢",
    name: "Knotless Knot",
    img: require('@/assets/images/knots/11.png'),
    tyingInstructions: [
      "Pass the line through the hook eye, leaving a tag end long enough for wrapping.",
      "Lay the tag along the shank and wrap 6–8 times downward toward the bend.",
      "Thread the tag end back through the eye from the hook point side.",
      "Pull the standing line to tighten coils snugly on the shank."
    ],
    purpose:
      "Used mainly in carp and hair rigs, creating a straight, reliable hook alignment without knot bulk.",
    whenToUse:
      "Perfect for rigs where you want the bait to sit away from the hook (e.g., hair rigs).",
    compatibleLineTypes: ["Monofilament", "Braid"],
    useCases: ["Hair rigs", "Carp fishing", "Bait rigs"]
  },
  {
    category: "Line-to-Line",
    difficulty: 'Intermediate',
    emoji: "🪢",
    name: "Double Uni Knot",
    img: require('@/assets/images/knots/12.png'),
    tyingInstructions: [
      "Overlap the ends of two lines about 20 cm.",
      "With Line A, form a loop and wrap the tag end around both lines and through the loop 5–7 times.",
      "Tighten lightly and repeat with Line B in the opposite direction.",
      "Moisten both knots and pull standing lines to slide knots together."
    ],
    purpose:
      "A reliable, easy-to-tie knot for connecting lines of similar or slightly different diameters.",
    whenToUse:
      "Ideal for joining mainline to leader or connecting two sections of line without hardware.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: [
      "Mainline to leader connections",
      "Freshwater and saltwater rigs",
      "Multi-line splicing"
    ]
  },
  {
    category: "Line-to-Line",
    difficulty: 'Advanced',
    emoji: "🪢",
    name: "Blood Knot",
    img: require('@/assets/images/knots/13.png'),
    tyingInstructions: [
      "Overlap line ends about 20 cm.",
      "Wrap Line A around Line B 5–7 times, then pass the tag back through the center.",
      "Repeat with Line B, wrapping around Line A the same number of times and back through the center in the opposite direction.",
      "Moisten and pull both standing lines slowly to roll the coils together."
    ],
    purpose:
      "Creates a slim, smooth connection ideal for casting and line flow through guides.",
    whenToUse:
      "Perfect for joining two lines of similar diameter, especially fly leaders or tippets.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon"],
    useCases: ["Fly line leaders", "Tippet extensions", "Light tackle setups"]
  },
  {
    category: "Line-to-Line",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Albright Knot",
    img: require('@/assets/images/knots/14.png'),
    tyingInstructions: [
      "Form a loop in the heavier line (leader).",
      "Insert the tag end of the lighter line through the loop.",
      "Wrap the lighter line around itself and both loop strands 10–12 times.",
      "Feed the tag end back through the loop, exiting the same side it entered.",
      "Moisten and pull both lines slowly to tighten."
    ],
    purpose:
      "Strong, versatile knot for connecting lines of very different diameters or materials.",
    whenToUse:
      "Use when attaching braided mainline to heavier fluorocarbon or mono leader.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: ["Braid-to-leader connections", "Saltwater rigs", "Offshore setups"]
  },
  {
    category: "Line-to-Line",
    difficulty: 'Advanced',
    emoji: "🪢",
    name: "FG Knot",
    img: require('@/assets/images/knots/15.png'),
    tyingInstructions: [
      "Hold the leader tight and lay the braid over it.",
      "Wrap the braid over and under the leader alternately 16–22 times.",
      "Lock the wraps with two half-hitches on the braid.",
      "Pull tight to seat the wraps firmly.",
      "Finish with 3–4 half-hitches and trim the leader close."
    ],
    purpose:
      "Creates the thinnest, strongest braid-to-leader connection that passes easily through guides.",
    whenToUse:
      "Best choice for spinning reels or long-cast setups requiring a smooth connection.",
    compatibleLineTypes: ["Braid (mainline)", "Fluorocarbon (leader)", "Monofilament (leader)"],
    useCases: [
      "Offshore fishing",
      "Heavy-duty leader setups",
      "Casting applications"
    ]
  },
  {
    category: "Line-to-Line",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Surgeon’s Knot",
    img: require('@/assets/images/knots/16.png'),
    tyingInstructions: [
      "Overlap the ends of two lines about 20 cm.",
      "Tie an overhand knot with both lines together.",
      "Pass both tag ends and standing lines through the loop again.",
      "Moisten and pull all four strands evenly to tighten."
    ],
    purpose:
      "Simple and fast knot for connecting two lines, even of different diameters.",
    whenToUse:
      "Perfect for quick leader changes or when visibility is low, and speed matters more than slimness.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon"],
    useCases: ["Fly fishing", "Emergency leader repair", "Light tackle rigs"]
  },
  {
    category: "Line-to-Line",
    difficulty: 'Intermediate',
    emoji: "🪢",
    name: "Yucatan Knot",
    img: require('@/assets/images/knots/17.png'),
    tyingInstructions: [
      "Form a double line (loop) with the braid mainline.",
      "Pass the loop through the leader loop about 8–10 cm.",
      "Wrap the doubled braid around the leader 6–8 times.",
      "Pass the braid loop back over the leader loop.",
      "Moisten and tighten slowly, pulling all ends firmly."
    ],
    purpose:
      "Compact, high-strength connection that works exceptionally well with braid-to-mono or braid-to-fluoro setups.",
    whenToUse:
      "Use when strength and slim profile are needed, especially for saltwater or jigging.",
    compatibleLineTypes: ["Braid (mainline)", "Fluorocarbon (leader)", "Monofilament (leader)"],
    useCases: ["Offshore jigging", "Braid-to-leader connections", "Heavy casting rigs"]
  },
  {
    category: "Stopper & Utility",
    difficulty: 'Advanced',
    emoji: "🪢",
    name: "Stopper Knot",
    img: require('@/assets/images/knots/18.png'),
    tyingInstructions: [
      "Pass the tag end over the standing line to form a small loop.",
      "Wrap the tag around the standing line and back through the loop.",
      "Moisten and pull tight to form a compact knot."
    ],
    purpose:
      "Creates a small, secure knot at the end of a line to prevent it from slipping through guides or loops.",
    whenToUse:
      "Use as a simple end knot or as a stopper for sliding rigs and floats.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: [
      "Preventing line slippage",
      "Acting as a float or sinker stop",
      "Basic rigging support"
    ]
  },
  {
    category: "Stopper & Utility",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Figure-Eight Knot",
    img: require('@/assets/images/knots/19.png'),
    tyingInstructions: [
      "Make a small loop near the end of the line.",
      "Pass the tag end over the standing line, under, and then through the loop.",
      "Tighten carefully to create a figure-eight shape."
    ],
    purpose:
      "Forms a smooth, strong stopper knot that is easy to untie even after tension.",
    whenToUse:
      "Perfect for creating a reliable end stop or as a base for other knots like loop or join knots.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: [
      "End stopper for rigs",
      "Preventing tackle slippage",
      "Fly fishing leaders"
    ]
  },
  {
    category: "Stopper & Utility",
    difficulty: 'Advanced',
    emoji: "🪢",
    name: "Half Hitch / Double Half Hitch",
    img: require('@/assets/images/knots/20.png'),
    tyingInstructions: [
      "Wrap the tag end around the object or standing line and pass it through the loop you’ve created (that’s one Half Hitch).",
      "Repeat the process again to create a Double Half Hitch for added security.",
      "Moisten and pull tight."
    ],
    purpose:
      "Provides a quick, easy way to secure a line around an object or finish other knots.",
    whenToUse:
      "Use for temporary fastening, securing a load, or finishing other knots like the Bimini Twist.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: [
      "Securing lines to rods or rings",
      "Knot finishing",
      "Temporary tie-downs"
    ]
  },
  {
    category: "Stopper & Utility",
    difficulty: 'Begginer',
    emoji: "🪢",
    name: "Arbor Knot (for attaching line to spool)",
    img: require('@/assets/images/knots/21.png'),
    tyingInstructions: [
      "Wrap the line around the spool arbor.",
      "Tie an overhand knot around the standing line with the tag end.",
      "Tie another overhand knot at the tag’s very end.",
      "Pull the standing line to slide the knots snugly against the spool."
    ],
    purpose:
      "Attaches fishing line securely to the reel spool to prevent slippage.",
    whenToUse:
      "Always use when spooling a new reel with monofilament, fluorocarbon, or braid.",
    compatibleLineTypes: [
      "Monofilament",
      "Fluorocarbon",
      "Braid (use backing for braid)"
    ],
    useCases: [
      "Attaching line to spool",
      "Starting point for reel setup",
      "Secure reel anchoring"
    ]
  },
  {
    category: "Stopper & Utility",
    difficulty: 'Intermediate',
    emoji: "🪢",
    name: "Slip Knot",
    img: require('@/assets/images/knots/22.png'),
    tyingInstructions: [
      "Form a small loop by crossing the tag end over the standing line.",
      "Pass the tag end through the loop to create a sliding loop.",
      "Adjust loop size and tighten gently."
    ],
    purpose:
      "A simple adjustable knot that tightens under tension but can easily be loosened.",
    whenToUse:
      "Use when you need an adjustable loop for rigging, bait presentation, or temporary fastening.",
    compatibleLineTypes: ["Monofilament", "Fluorocarbon", "Braid"],
    useCases: [
      "Adjustable rig loops",
      "Temporary fastening",
      "Slip float setups"
    ]
  }
];

export const categories = [...new Set(knots.map(knot => knot.category))];
export const difficulties = [...new Set(knots.map(knot => knot.difficulty))];
export const lineTypes = [...new Set(knots.flatMap(knot => knot.compatibleLineTypes))];

export const safetyTips: string[] = [
  'Use 5-6 wraps for mono/fluoro, 7-8 for braid',
  'Always wet line before final tightening',
  'Pull slowly and steadily to seat knot properly',
  'Ensure coils dont overlap during tying'
]

export const fishingKnotsQuiz: QuizItem[] = [
  {
    question: "Which knot is most commonly used for tying a hook or lure directly to the fishing line?",
    options: ["Double Uni Knot", "Palomar Knot", "Surgeon’s Loop"],
    correctAnswer: "Palomar Knot",
  },
  {
    question: "Which line-to-line knot is best for joining a braided mainline to a fluorocarbon leader?",
    options: ["FG Knot", "Slip Knot", "Stopper Knot"],
    correctAnswer: "FG Knot",
  },
  {
    question: "Which loop knot allows a lure or fly to move freely for a more natural action?",
    options: ["Non-Slip Mono Loop", "Arbor Knot", "Half Hitch"],
    correctAnswer: "Non-Slip Mono Loop",
  },
  {
    question: "What is the main purpose of a stopper knot?",
    options: ["To connect two lines", "To prevent the line from slipping through an opening", "To attach a lure"],
    correctAnswer: "To prevent the line from slipping through an opening",
  },
  {
    question: "Which knot is ideal for attaching the fishing line to the spool of a reel?",
    options: ["Arbor Knot", "Dropper Loop", "Blood Knot"],
    correctAnswer: "Arbor Knot",
  },
];
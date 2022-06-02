export const modes = [
    {
        name: "Ionian",
        intervals: ["2", "2", "1", "2", "2", "2", "1"]
    },
    {
        name: "Dorian",
        intervals: ["2", "1", "2", "2", "2", "1", "2"]
    },
    {
        name: "Phrygian",
        intervals: ["1", "2", "2", "2", "1", "2", "2"],
        altName: "Modern Phrygian",
    },
    {
        name: "Lydian",
        intervals: ["2", "2", "2", "1", "2", "2", "1"],
    },
    {
        name: "Mixolydian",
        intervals: ["2", "2", "1", "2", "2", "1", "2"],
    },
    {
        name: "Aeolian",
        intervals: ["2", "1", "2", "2", "1", "2", "2"],
    },
    {
        name: "Locrian",
        intervals: ["1", "2", "2", "1", "2", "2", "2"],
    },
]

export const scales = [
    {
        name: "Major Scale",
        modes: [
            {
                name: "Ionian",
                intervals: ["2", "2", "1", "2", "2", "2", "1"]
            },
            {
                name: "Dorian",
                intervals: ["2", "1", "2", "2", "2", "1", "2"]
            },
            {
                name: "Phrygian",
                intervals: ["1", "2", "2", "2", "1", "2", "2"],
            },
            {
                name: "Lydian",
                intervals: ["2", "2", "2", "1", "2", "2", "1"],
            },
            {
                name: "Mixolydian",
                intervals: ["2", "2", "1", "2", "2", "1", "2"],
            },
            {
                name: "Aeolian",
                intervals: ["2", "1", "2", "2", "1", "2", "2"],
            },
            {
                name: "Locrian",
                intervals: ["1", "2", "2", "1", "2", "2", "2"],
            },
        ]
    },
    {
        name: "Double harmonic scale",
        modes: [
            {
                name: "Double harmonic major",
                degrees: ["1", "b2", "3", "4", "5", "b6", "7", "8"],
                intervals: ["1", "3", "1", "2", "1", "3", "1"],
            },
        ]
    }
];

export const scaleExamples = [
    {
        name: "A Ionian",
        altName: "A Major",
        notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
        intervals: [2, 2, 1, 2, 2, 2, 1],
        type: "Ionian",
    },
    {
        name: "A# Ionian",
        altName: "A Major",
        notes: ["A#", "B#", "D", "D#", "E#", "G", "A"],
        intervals: [2, 2, 1, 2, 2, 2, 1],
        type: "Ionian",
    },
    {
        name: "B Aeolian",
        altName: "B Minor",
        notes: ["B", "C#", "D", "E", "F#", "G", "A"],
        intervals: [2, 1, 2, 2, 1, 2, 2],
        type: "Aeolian",
    },
    {
        name: "B Harmonic Minor",
        altName: "B Harmonic Minor",
        notes: ["B", "C#", "D ", "E", "F#", "G", "A#"],
        intervals: [2, 1, 2, 2, 1, 3, 1],
        type: "Harmonic Minor",
    },
    {
        name: "C Ionian",
        altName: "C Major",
        notes: ["C", "D", "E", "F", "G", "A", "B"],
        intervals: [2, 2, 1, 2, 2, 2, 1],
        type: "Ionian",
    },
];

export const chromaticScale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];    // TODO:    Remove?
export const chromaticScaleExtended = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab']; // TODO:    rename


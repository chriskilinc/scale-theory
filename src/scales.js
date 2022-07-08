export const modes = [
    {
        name: "Ionian",
        intervals: ["2", "2", "1", "2", "2", "2", "1"],
        tags: ["major"],
    },
    {
        name: "Dorian",
        intervals: ["2", "1", "2", "2", "2", "1", "2"],
        tags: ["minor"],
    },
    {
        name: "Phrygian",
        intervals: ["1", "2", "2", "2", "1", "2", "2"],
        altNames: "Modern Phrygian",
        tags: ["minor"],
    },
    {
        name: "Lydian",
        intervals: ["2", "2", "2", "1", "2", "2", "1"],
        tags: ["major"],
    },
    {
        name: "Mixolydian",
        intervals: ["2", "2", "1", "2", "2", "1", "2"],
        altNames: "Dominant scale",
        tags: [],
    },
    {
        name: "Aeolian",
        intervals: ["2", "1", "2", "2", "1", "2", "2"],
        tags: [],
    },
    {
        name: "Locrian",
        intervals: ["1", "2", "2", "1", "2", "2", "2"],
        tags: [],
    },
    {
        name: "Double harmonic major",
        intervals: ["1", "3", "1", "2", "1", "3", "1"],
        altNames: "Byzantine",
        tags: [],
    },
    {
        name: "Double harmonic minor",
        intervals: ["2", "1", "3", "1", "1", "3", "1"],
        altNames: "Hungarian minor, Gypsy minor",
        tags: [],
    },
]

export const chromaticScale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];    // TODO:    Remove?
export const chromaticScaleExtended = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab']; // TODO:    rename


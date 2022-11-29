import SCALES from './scales';
import NOTES from "./notes"
import CHORDS from './chords';

const getNotesForScale = (tonic:number, scale: string): number[] => {
    let notesInScale = [];
    for (var offset of SCALES[scale]) {
        notesInScale.push((tonic + offset)%12);
    }
    return notesInScale;
};

export const getNotesForChord = (tonic:number, chordName: string): number[] => {
    let notesInChord = [];
    for (var offset of CHORDS[chordName]) {
        notesInChord.push((tonic + offset)%12);
    }
    return notesInChord;
};

export const getTonnetzGrid = () : Number[] => {
    let elements = []; // cycle of 5th
    let offsets = [0,4,8]; // shifts of 3rd
    for (let i=0; i<144; i++) {
        let row = Math.floor(i/12)%3;
        let col = i%12
        let num = (col*7 + offsets[2-row])%12 
        elements.push(num)
    }
    return elements;
};

export default getNotesForScale;
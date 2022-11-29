// import { useEffect, useState } from 'react'
// import '../../App.css'
// import NOTES from '../../music/notes'
// import SCALES from '../../music/scales'
// import CHORDS from '../../music/chords'
// import getNotesForScale, { getNotesForChord, getTonnetzGrid } from '../../music/utils'
// import Cell from './cell'

// function Tonnetz() {
//   const [tonic, setTonic] = useState(0);
//   const [scale, setScale] = useState('major');
//   const [chordTonic, setChordTonic] = useState(null);
//   const [chordType, setChordType] = useState(null);
//   const [chordNotes, setChordNotes] = useState([-1])

//   let elements = getTonnetzGrid();

//   const currentScale = getNotesForScale(tonic, scale);

//   useEffect(()=>{
//     console.log('Effect: tonic', chordTonic)
//     console.log('Effect: type', chordType)
//     if (chordTonic!==null && chordType!==null) {
//       console.log('Got chord name and type!')
//       setChordNotes(getNotesForChord(chordTonic, chordType))
//     }
//   }, [chordTonic, chordType]);
  
//   const onTonicChange = (e:Event) => {
//     setTonic(NOTES[e.target.value]);
//   };

//   const onChordTonicChange = (e:Event) => {
//     console.log('onChordTonicChange', NOTES[e.target.value]);
//     setChordTonic(NOTES[e.target.value]);
//   };

//   const onScaleChange = (e:Event) => {
//     setScale(e.target.value);
//   };

//   const onChordTypeChange = (e:Event) => {
//     console.log('onChordTypeChange', CHORDS[e.target.value]);
//     setChordType(e.target.value);
//   }

//   return (
//     <div>
//       <div>
//         <h1 className="text-3xl font-bold underline">Showing {`${NOTES[tonic]} ${scale}`}</h1>      
//         <div>
//           <span> Scale: </span>
//           <select onChange={e => onTonicChange(e)} className="select select-bordered max-w-xs">
//             <option disabled={true} selected={true}>Tonic</option> 
//             {Object.values(NOTES).filter(note=> isNaN(note)).map(note => <option>{note}</option>)} 
//           </select>
//           <select onChange={e => onScaleChange(e)} className="select select-bordered max-w-xs">
//             <option disabled={true} selected={true}>Scale</option> 
//             {Object.keys(SCALES).map(scale => <option>{scale}</option>)} 
//           </select>
//           <span> Chord: </span>
//           <select onChange={e => onChordTonicChange(e)} className="select select-bordered max-w-xs">
//             <option disabled={true} selected={true}>Chord Tonic</option> 
//             {Object.values(NOTES).filter(note=> isNaN(note)).map(note => <option>{note}</option>)} 
//           </select>
//           <select onChange={e => onChordTypeChange(e)} className="select select-bordered max-w-xs">
//             <option disabled={true} selected={true}>Chord Type</option> 
//             {Object.keys(CHORDS).map(chord => <option>{chord}</option>)} 
//           </select>
//         </div>
//         <div className="tonnetzgrid">
//           {elements.map((note,index) => 
//             <Cell 
//               key={`${note}_${index}`}
//               isInChord={chordNotes.includes(note)}
//               isTonic={note===tonic} 
//               inScale={currentScale.includes(note)} 
//               note={note} 
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tonnetz
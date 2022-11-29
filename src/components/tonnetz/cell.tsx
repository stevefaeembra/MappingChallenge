import { useState } from 'react'
import '../../App.css'
import Notes from '../../music/notes'
import EbonyIvory from '../../music/ebonyivory'

interface Props {
  note: Number,
  inScale: boolean,
  isTonic: boolean,
  isInChord: boolean,
}

function Cell(props: Props) {
  const note = props.note
  let classes = EbonyIvory[note] === 'E' ? 'cell ebony' : 'cell ivory'
  if (props.inScale && !props.isInChord) {
    classes += " bg-red-500 text-white";
    classes += " drop-shadow-lg rounded-md"
  }
  if (props.inScale) {
    classes += " bg-blue-500 text-white";
    classes += " drop-shadow-lg rounded-md"
  }
  if (props.isInChord) {
    classes += " border-4 border-red-900"
  }
  if (props.isTonic) classes += " bg-amber-900 text-white";
  return (
    <div className={classes}>{Notes[note]}</div>
  )
}

export default Cell
import React from 'react';

const InputCom = (props) => {
	return (
		<div className="flex">
			<form onSubmit={props.addNew}>
				<input 
					type='text-area' 
					className="make-comment" 
					placeholder="Add a comment..." 
					onChange={props.commentHandle} 
					value={props.comment}
				/>
			</form>
			<p>...</p>
		</div>
	)
}

export default InputCom;
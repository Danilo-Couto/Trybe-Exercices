      
import React from 'react'

class LikeFruit extends React.Component {
    render () {
        const {likeFruit, handleInputChange } = this.props
        return (
            <fieldset>
                Você gosta de fruta?
                <input 
                name='likeFruit'
                type='checkbox'
                id = 'likeFruit'
                checked={likeFruit}
                onChange={handleInputChange}      
                /> 
                <label htmlFor="likeFruit"> Sim </label>
            </fieldset>            

        )
    }
}

export default LikeFruit;
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const EmojiPicker = ({ emoji, setEmoji }) => {

    return (
        <div>
            <Picker data={data} 
            theme='light' 
            onEmojiSelect={ (emoji) => setEmoji(emoji.native) }
            previewPosition='none'
        />
        </div>
    )
}

export default EmojiPicker;

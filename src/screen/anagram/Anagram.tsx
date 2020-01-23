import React, { Component } from 'react';

/* Material UI */
import Typography from '@material-ui/core/Typography';

/* Components */
import TextComponent from '../../components/common/text_component/TextComponent';

class Anagram extends Component {
    render() {
        return (
            <TextComponent title="What is an Anagram?">
                <Typography variant="body1">
                    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word <em>anagram</em> can be rearranged into <em>nag a ram</em>, or the word <em>binary</em> into <em>brainy</em> or the word <em>adobe</em> into <em>abode</em>.
                </Typography>
                <Typography variant="body1">
                    The original word or phrase is known as the <em>subject</em> of the anagram. Any word or phrase that exactly reproduces the letters in another order is an anagram. Someone who creates anagrams may be called an "anagrammatist", and the goal of a serious or skilled anagrammatist is to produce anagrams that reflect or comment on their subject.
                </Typography>
            </TextComponent>
        );
    }
}

export default Anagram;

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './Anagrams.styles';

/* Material UI */
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/* Components */
import TextComponent from '../../components/common/text_component/TextComponent';

interface Props {
    classes: any;
}

interface State {
    anagrams: any;
}

class Anagram extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            anagrams: [],
        }
    }
    
    alphabetize(word: string) {
        if (!word) {
            return;
        }
        word = word.toLowerCase();
        let letters = word.split('');
        letters = letters.sort();
        word = letters.join('');
        return word;
    }

    getGroupedAnagrams(words: string[]) {
        const anagrams = {} as any;
        words.forEach((word) => {
            const sortedWord = this.alphabetize(word);
            if (sortedWord) {
                if (anagrams[sortedWord]) {
                    return anagrams[sortedWord].push(word); 
                }
                anagrams[sortedWord] = [word];
            } 
        });
        return anagrams;
    }

    anagrams(file: any) {
        const rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    const text = rawFile.responseText;
                    let words =  text.split('\n');
                    words = words.filter(entry => /\S/.test(entry));
                    const groupedAnagrams = this.getGroupedAnagrams(words);
                    const arr = [];
                    for (const sortedWord in groupedAnagrams) {
                        arr.push(groupedAnagrams[sortedWord]);
                    }
                    this.setState({ anagrams: arr });
                }
            }
        };
        rawFile.send(null);
    };

    componentDidMount() {
        this.anagrams('./data/ordbok-utf8.txt');
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextComponent title="Sorting Anagrams">
                    <Typography variant="body1">
                        This is the problem that was given in the test. The table below has the original word on the left, and then the anagrams are on the right side.
                    </Typography>
                </TextComponent>
                <Card className={classes.card}>
                    <CardContent>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Original Word</TableCell>
                                    <TableCell>Anagrams</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.anagrams.map((item: any, index: any) => {
                                return (
                                    <TableRow className={classes.row} key={index}>
                                        <TableCell>{item[0]}</TableCell>
                                        <TableCell>{item.join(', ')}</TableCell>
                                    </TableRow>
                                )
                            })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Anagram);

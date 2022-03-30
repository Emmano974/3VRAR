import { TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles(() => ({
    cssLabel: {
        color : 'white'
    },
    cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
        borderColor: `white !important`,
        }
    },    
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important',
    },
}))





function Search(props) {

      const classes = useStyle();

    return (
        <>
        {props.load ? (
            <>
                <SearchIcon sx={{ fontSize:30, mt:1.4, mr:2, ml:1 }}/>
                <TextField 
                    sx={{ input: { color: 'whitesmoke' } }}
                    placeholder={'Search...'}
                    onChange={(event) => props.search(event)} 
                    InputLabelProps={{
                        classes: {
                        root: classes.cssLabel,
                        },
                    }}
                    InputProps={{
                        classes: {
                        root: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                        },
                    }}
                    />
            </>
            ) : (
                <>
                <SearchIcon sx={{ fontSize:30, mt:1.4, mr:2, ml:1 }}/>
                <TextField 
                    disabled
                    sx={{ input: { color: 'whitesmoke' } }}
                    onChange={(event) => props.search(event)} 
                    InputLabelProps={{
                        classes: {
                        root: classes.cssLabel,
                        },
                    }}
                    InputProps={{
                        classes: {
                        root: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                        },
                    }}
                    />
            </>
            )}
        </>
    )
}

export default Search
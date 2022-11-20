import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumlList = [
        {
            id:1,
            name:'eat',
            thumbsnaiURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeH769zgHJKVhSLXxcIsN8cB_NAlKGJenHiQ&usqp=CAU'
        },
        {
            id:2,
            name:'sleep',
            thumbsnaiURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeH769zgHJKVhSLXxcIsN8cB_NAlKGJenHiQ&usqp=CAU'

        },
        {
            id:3,
            name:'code',
            thumbsnaiURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeH769zgHJKVhSLXxcIsN8cB_NAlKGJenHiQ&usqp=CAU'
        }
    ];
    return (
        <div>
            <h1>lisst albumlListbum</h1>
            <AlbumList albumlList={albumlList}/>
        </div>
    );
}

export default AlbumFeature;
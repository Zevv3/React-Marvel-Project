import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import { chooseName, chooseDesc } from '../../redux/slices/rootslice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CharacterFormProps {
    id?:any;
    data?: {}
};

interface CharacterState {
    id: any;
    name: string;
    desc: string;
    num_comics: number;
    num_series: number;
    num_stories: number;
};


// TODO I don't think I want the user to enter the id. Instead,
// I should make an api call with the character name and get the id that way.

export const UpdateForm = (props:CharacterFormProps) => {
    const dispatch = useDispatch();
    let { characterData, getData } = useGetData();
    const store = useStore();
    const { register, handleSubmit } = useForm({  });
    const onSubmit = async (data:any, event:any) => {
        console.log(props.id);
        if (props.id!) {
            await serverCalls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            window.location.reload();
        } else {
            // make the api call with data.name to get id 
            // dispatch(chooseId(data.id))
            dispatch(chooseName(data.name))
            dispatch(chooseDesc(data.desc))
            // dispatch(chooseComics(data.num_comics))
            // dispatch(chooseSeries(data.num_series))
            // dispatch(chooseStories(data.num_stories))
            console.log(store.getState());
            await serverCalls.search(store.getState())
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div>
                    <label htmlFor="id">Character ID</label>
                    <Input {...register('id')} name='id' placeholder='Character ID' />
                </div> */}
                <div>
                    <label htmlFor="name">Character Name</label>
                    <Input {...register('name')} name='name' placeholder='Character Name' />
                </div>
                <div>
                    <label htmlFor="desc">Character Description</label>
                    <Input {...register('desc')} name='desc' placeholder='Description' />
                </div>
                {/* Actually I think I'll do an api call for this stuff too. Maybe even the description 
                but I think I'd rather leave that open to the user. and by this stuff I mean the comics,
                series, stories i was going to put here*/}
                {/* <div>
                    <label htmlFor="id">Character Name</label>
                    <Input {...register('name')} name='name' placeholder='Character Name' />
                </div>
                <div>
                    <label htmlFor="id">Character Name</label>
                    <Input {...register('name')} name='name' placeholder='Character Name' />
                </div>
                <div>
                    <label htmlFor="id">Character Name</label>
                    <Input {...register('name')} name='name' placeholder='Character Name' />
                </div>*/}
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
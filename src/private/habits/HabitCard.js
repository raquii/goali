import { useState } from 'react';
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import { useDeleteLogMutation, useNewLogMutation } from '../../features/api';
import HabitDetails from './HabitDetails';
import Button from '../../components/button/Button';
import HabitForm from './HabitForm';

import './HabitCard.css';

dayjs.extend(relativeTime);

export default function HabitCard({ habit }) {
    const [showForm, setShowForm] = useState(false);
    const [showHabitDetails, setShowHabitDetails] = useState(false);

    //destructuring habit
    const {
        id,
        name,
        description,
        periodicity,
        frequency,
        private_habit,
        total_times,
        logs
    } = habit;

    //check if the last time the habit was logged is in the same period as the the current date
    const lastLogIsSamePeriod = logs.length > 0 && dayjs().isSame(logs[0].date, periodicity)

    const period = {
        day: 'TODAY',
        month: 'THIS MONTH',
        week: 'THIS WEEK'
    }

    const [newLog] = useNewLogMutation()
    const [deleteLog] = useDeleteLogMutation();

    async function logHabit() {
        const logObj = {
            habit_id: id,
            date: dayjs().format('MM/DD/YYYY')
        }

        try {
            await newLog(logObj).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteTodaysLog() {
        try {
            await deleteLog(logs[0]).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {showForm &&
                <HabitForm
                    setShowForm={setShowForm}
                    habit={habit}
                    formPurpose='Edit'
                />}

            <div className='habit-card' id={id}>
                <div className='habit-header-container'>
                    <h2 className='habit-name'>
                        {name} {private_habit &&
                            <i
                                title="Private habit"
                                className="fas fa-lock"
                            />}
                    </h2>
                    <div className='habit-check-off'>
                        {period[periodicity]}:
                        {lastLogIsSamePeriod ?
                            <Button
                                className='log-button checked'
                                clickHandler={deleteTodaysLog}
                                text={<i className='far fa-check-circle' />}
                            /> :
                            <Button
                                className='log-button'
                                clickHandler={logHabit}
                                text={<i className='far fa-circle' />}
                            />
                        }
                    </div>
                </div>

                {showHabitDetails && <HabitDetails
                    id={id}
                    name={name}
                    frequency={frequency}
                    periodicity={periodicity}
                    total_times={total_times}
                    description={description}
                    setShowForm={setShowForm}
                />}

                <Button
                    className='show-details'
                    clickHandler={() => setShowHabitDetails(!showHabitDetails)}
                    text={showHabitDetails ?
                        <i className="fas fa-chevron-up" />
                        :
                        <i className='fas fa-ellipsis-h' />
                    }

                />

            </div>
        </>
    )
}

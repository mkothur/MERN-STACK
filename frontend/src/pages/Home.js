import { useEffect } from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

/* Components*/
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    // const [workouts, setWorkouts] = useState(null);
    const {workouts, dispatch} = useWorkoutsContext()
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts/');
            const data = await response.json();
            if (response.ok) {
                //setWorkouts(data)
                dispatch({type: 'SET_WORKOUTS', payload: data})
            }
            // await fetch('/api/workouts/')
            // .then((res) => res.json())
            // .then((data) => setWorkouts(data))
        }
        fetchWorkouts();
    }, [dispatch])
    return (
        <div className="home">
            <div className="workout">
                {workouts && workouts.map((workout) => (
                    // <p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;
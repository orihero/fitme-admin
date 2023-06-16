import { useEffect, useState } from "react";


import { REQUESTS } from "../../api/requests";
import { Trainer } from "../../types";

export const TrainersHook = () => {

  const [trainers, settrainers] = useState<Trainer[]>([])
  const [loading, setLoading] = useState(false)

  const deleteTrainer = async (id: string) => {
    try {
      await REQUESTS.trainers.delete(id)
    } catch (error) {

    }
  }

  const createTrainer = async (trainer: Partial<Trainer>) => {
    try {
      await REQUESTS.trainers.add(trainer)
    } catch (error) {

    }
  }

  const effect = async () => {
    setLoading(true)
    try {
      const res = await REQUESTS.trainers.get();
      settrainers(res.data.data)
    } catch (e) {
      console.log("e: ", e);
    }
    setLoading(false)
  };

  useEffect(() => {
    effect();
  }, []);

  return {
    data: trainers,
    loading,
    fetchTrainers: effect,
    deleteTrainer,
    createTrainer
  };
};

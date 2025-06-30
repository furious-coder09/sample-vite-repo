import axios from 'axios';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

const output = document.getElementById('output');

const load = async () => {
  const res = await axios.get('https://catfact.ninja/fact');
  const fact = res.data.fact;
  const time = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const id = uuidv4();

  output.innerText = `[${time}] (${id}): ${fact}`;
};

load();

import { redirect } from 'next/navigation';

export default function HomePage() {
  // Leitet alle Anfragen von der Wurzel ("/") direkt zum Login weiter.
  redirect('/login');
}

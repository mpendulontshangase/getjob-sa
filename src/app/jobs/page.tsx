import { Suspense } from 'react';
import JobsPageInner from './jobPageInner';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <JobsPageInner />
    </Suspense>
  );
}

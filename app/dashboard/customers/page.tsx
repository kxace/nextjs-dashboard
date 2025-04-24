import CustomersTable from '@/app/ui/customers/table';
import {Metadata} from 'next';
import {Suspense} from 'react';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function CustomersPage(props: {
        searchParams?: Promise<{
            query?: string;
        }>;
    }) {
    const searchParams = await props.searchParams;

    const query = searchParams?.query || '';

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <CustomersTable query={query}/>
        </Suspense>
    )
}
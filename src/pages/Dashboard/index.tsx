import { OcurrenceTable } from "../../components/OccurenceTable"
import { Search } from "../../components/Seach"
import { Sidebar } from "../../components/Sidebar"
import { TopNavigation } from "../../components/TopNavigation"

export const Dashboard = () => {
    return (
        <section className="min-h-screen lg:grid lg:grid-cols-[230px,1fr]">

            <Sidebar />

            <main className="h-full lg:min-h-screen bg-gray-50 px-6 lg:pl-[70px] lg:pr-14 pt-8">
                <TopNavigation />

                <div className="mt-14">
                    <Search />
                </div>

                <div className="mb-20">
                    <OcurrenceTable />
                </div>

            </main>
        </section>
    )
}
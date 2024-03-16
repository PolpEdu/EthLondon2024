import { Tooltip } from "@radix-ui/react-tooltip";

export default function Heatmap() {
    // { transactions }: { transactions: any }
    // Assuming transactions is an array of { date, count }

    interface TransactionData {
        date: string;
        count: number;
    }

    function generateTransactionsData(): TransactionData[] {
        const today = new Date();
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const transactionsData: TransactionData[] = [];

        for (let day = 0; day < 365; day++) {
            const date = new Date(oneYearAgo);
            date.setDate(date.getDate() + day);

            transactionsData.push({
                date: date.toISOString().split('T')[0],
                count: Math.floor(Math.random() * 101), // Random number of transactions between 0 and 100
            });
        }

        return transactionsData;
    }

    // Define a function to determine the intensity of a color based on transaction count
    const getColorIntensity = (count: number) => {
        if (count > 200) return 'bg-blue-800';
        if (count > 50) return 'bg-blue-600';
        if (count > 5) return 'bg-blue-400';
        return 'bg-blue-200';
    };

    const transactions = generateTransactionsData();
    return (
        <div className="w-full h-fit overflow-x-scroll overflow-y-auto">
            <ul className="grid grid-rows-7 grid-cols-min gap-1">
                {transactions.map((transaction, index) => (
                    <li
                        key={index}
                        className={`w-2 h-2 ${getColorIntensity(transaction.count)} rounded-sm`}
                        title={`Transactions on ${transaction.date}: ${transaction.count}`}
                    />
                ))}
            </ul>
        </div>
    );
}
import './widget.scss';

function SmallWidget({ title, value } : { title: string, value: string }) {
    return (
        <div className="widget col-span-2 row-span-6">
            <div className="widget--title-section">
                {title}
            </div>
            <div className="widget--value-section">
                {value}
            </div>
            <div className="widget--compare-section">
                Data between 2024-10-26 and 2024-11-26
            </div>
        </div>
    )
}

export default SmallWidget;
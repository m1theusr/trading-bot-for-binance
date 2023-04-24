import React, { useState, useEffect, useMemo } from "react";


/**
 * props:
 * -symbol
 */
function CandleChart(props) {

    const [widget, setwidget] = useState({});

    useEffect(() => {

        const w = new window.TradingView.widget({
            symbol: 'BINANCE:' + props.symbol,
            autosize: true,
            interval: "60",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: false,
            details: true,
            widthdateranges: true,
            studies: [
                "RSI@tv-basicstudies"
            ],
            container_id: "tradingview"
        });
        setwidget(w);

    }, [props.symbol])


    const widgetHtml = useMemo(() => (
        <div className="row">
            <div className="col-12 mb-4">
                <div className="card cardDark border-0 shadow">
                    <div className="tradingview-widget-container">
                        <div id="tradingview" className="divTradingView"></div>
                    </div>
                </div>
            </div>

        </div>

    ), [props.symbol])

    return widgetHtml;

}

export default CandleChart;
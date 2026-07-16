using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.StockIndex
{
    /// <summary>
    /// Query options for the Stock Index API
    /// </summary>
    public class StockIndexQueryOptions
    {
        /// <summary>
        /// The index to retrieve
        /// </summary>
        [JsonProperty("index")]
        public string Index { get; set; }

        /// <summary>
        /// Year to retrieve data for (2010-present). Requires month parameter.
        /// </summary>
        [JsonProperty("year")]
        public int? Year { get; set; }

        /// <summary>
        /// Month to retrieve data for (1-12). Required when year is specified.
        /// </summary>
        [JsonProperty("month")]
        public int? Month { get; set; }
    }
}

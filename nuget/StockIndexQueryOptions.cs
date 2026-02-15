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
        /// Specific year to retrieve all daily values for (2010-present). Returns latest if not specified.
        /// </summary>
        [JsonProperty("year")]
        public string Year { get; set; }
    }
}

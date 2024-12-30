import React, { useEffect, useState } from "react";
import axios from "axios";

const SiteList = () => {
    const [sites, setSites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSites = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/sites");
                setSites(response.data.sites);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching sites:", error);
                setLoading(false);
            }
        };
        fetchSites();
    }, []);

 

    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
                <h1>Site Manager</h1>
                {sites.length === 0 ? (
                    <p>No sites available.</p>
                ) : (
                    sites.map((site) => (
                        <div
                            key={site.id}
                            style={{
                                border: "1px solid #ccc",
                                padding: "20px",
                                marginBottom: "20px",
                                borderRadius: "8px",
                            }}
                        >
                            <h2>{site.sitename}</h2>
                            <h3>{site.sitetitle}</h3>
                            <p><strong>Address:</strong> {site.siteaddress}</p>
                            <p><strong>Description:</strong> {site.sitedescription}</p>
                            <p><strong>Category:</strong> {site.category}</p>
                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                {(site.images || "")
                                    .split(",")
                                    .filter((img) => img.trim() !== "")
                                    .map((image, index) => (
                                        <img
                                            key={index}
                                            src={`http://localhost:4000/uploads/${image}`}
                                            alt={`Site ${index + 1}`}
                                            style={{
                                                width: "150px",
                                                height: "auto",
                                                borderRadius: "4px",
                                                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                                            }}
                                        />
                                    ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
    );
};

export default SiteList;

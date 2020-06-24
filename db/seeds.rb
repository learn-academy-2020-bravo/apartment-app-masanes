apartments = [
    {
    street: '619 Damn you fine',
    city: 'San Diego',
    zip_code: 91915,
    state: 'CA',
    country: 'USA'
},
{
    street: '808 Mate',
    city: 'San Diego',
    zip_code: 91910,
    state: 'HI',
    country: 'USA'
}
]

apartments.each do |attributes|
    Apartment.create attributes
end
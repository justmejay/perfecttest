// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



const url1: string= "https://jwooshop.cloudns.ph/wooshop/wp-json/wc/v3"
const authUrl1: string = "https://jwooshop.cloudns.ph/wooshop/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1: string = "https://jwooshop.cloudns.ph/wooshop/wp-json/jwt-auth/v1/token/validate"


// noinspection DuplicatedCode
export const environment = {
    production: false,
    backend_api_url: url1,
    auth_url: authUrl1,
    token_verify_url: tokenVerifyUrl1,
    apiUrl: 'https://jwooshop.cloudns.ph/wooshop/wp-json',
    readOnlyKeys: {
        consumer_key: 'ck_b1778df31e492584ed21cb8b94fcecf0efb620dc',
        consumer_secret: 'cs_84d42bb6fa052b321de1a9d7b8ee2f1147a3b39e'
    },
    writableKeys: {
        consumer_key: 'ck_f6ad5cb5404e276079328678b37aabf1547aeb12',
        consumer_secret: 'cs_2c03803bcc15149d8deb026f6792e1e8635818d5'
    },
    states: [
        {value: 'Abra', name: 'Abra'},
{value: 'Agusan del Norte', name: 'Agusan del Norte'},
{value: 'Agusan del Sur', name: 'Agusan del Sur'},
{value: 'Aklan', name: 'Aklan'},{value: 'Albay', name: 'Albay'},
{value: 'Antique', name: 'Antique'},
{value: 'Apayao', name: 'Apayao'},
{value: 'Aurora', name: 'Aurora'},
{value: 'Basilan', name: 'Basilan'},
{value: 'Bataan', name: 'Bataan'},
{value: 'Batanes', name: 'Batanes'},
{value: 'Batangas', name: 'Batangas'},
{value: 'Biliran', name: 'Biliran'},
{value: 'Benguet', name: 'Benguet'},
{value: 'Bohol', name: 'Bohol'},
{value: 'Bukidnon', name: 'Bukidnon'},
{value: 'Bulacan', name: 'Bulacan'},
{value: 'Cagayan', name: 'Cagayan'},
{value: 'Camarines Norte', name: 'Camarines Norte'},
{value: 'Camarines Sur', name: 'Camarines Sur'},
{value: 'Camiguin', name: 'Camiguin'},
{value: 'Capiz', name: 'Capiz'},
{value: 'Catanduanes', name: 'Catanduanes'},
{value: 'Cavite', name: 'Cavite'},
{value: 'Cebu', name: 'Cebu'},
{value: 'Compostela', name: 'Compostela'},
{value: 'Davao del Norte', name: 'Davao del Norte'},
{value: 'Davao del Sur', name: 'Davao del Sur'},
{value: 'Davao Oriental', name: 'Davao Oriental'},
{value: 'Eastern Samar', name: 'Eastern Samar'},
{value: 'Guimaras', name: 'Guimaras'},
{value: 'Ifugao', name: 'Ifugao'},
{value: 'Ilocos Norte', name: 'Ilocos Norte'},
{value: 'Ilocos Sur', name: 'Ilocos Sur'},
{value: 'Iloilo', name: 'Iloilo'},
{value: 'Isabela', name: 'Isabela'},
{value: 'Kalinga', name: 'Kalinga'},
{value: 'Laguna', name: 'Laguna'},
{value: 'Lanao del Norte', name: 'Lanao del Norte'},
{value: 'Lanao del Sur', name: 'Lanao del Sur'},
{value: 'La Union', name: 'La Union'},
{value: 'Leyte', name: 'Leyte'},
{value: 'Maguindanao', name: 'Maguindanao'},
{value: 'Marinduque', name: 'Marinduque'},
{value: 'Masbate', name: 'Masbate'},
{value: 'Mindoro Occidental', name: 'Mindoro Occidental'},
{value: 'Mindoro Oriental', name: 'Mindoro Oriental'},
{value: 'Misamis Occidental', name: 'Misamis Occidental'},
{value: 'Misamis Oriental', name: 'Misamis Oriental'},
{value: 'Mountain Province', name: 'Mountain Province'},
{value: 'Negros Occidental', name: 'Negros Occidental'},
{value: 'Negros Oriental', name: 'Negros Oriental'},
{value: 'North Cotabato', name: 'North Cotabato'},
{value: 'Northern Samar', name: 'Northern Samar'},
{value: 'Nueva Ecija', name: 'Nueva Ecija'},
{value: 'Nueva Vizcaya', name: 'Nueva Vizcaya'},{value: 'Palawan', name: 'Palawan'},
{value: 'Pampanga', name: 'Pampanga'},
{value: 'Pangasinan', name: 'Pangasinan'},
{value: 'Quezon', name: 'Quezon'},
{value: 'Quirino', name: 'Quirino'},
{value: 'Rizal', name: 'Rizal'},
{value: 'Romblon', name: 'Romblon'},
{value: 'Samar', name: 'Samar'},
{value: 'Sarangani', name: 'Sarangani'},
{value: 'Siquijor', name: 'Siquijor'},
{value: 'Sorsogon', name: 'Sorsogon'},
{value: 'South Cotabato', name: 'South Cotabato'},
{value: 'Southern Leyte', name: 'Southern Leyte'},
{value: 'Sultan Kudarat', name: 'Sultan Kudarat'},
{value: 'Sulu', name: 'Sulu'},
{value: 'Surigao del Norte', name: 'Surigao del Norte'},
{value: 'Surigao del Sur', name: 'Surigao del Sur'},
{value: 'Tarlac', name: 'Tarlac'},
{value: 'Tawi-Tawi', name: 'Tawi-Tawi'},
{value: 'Zambales', name: 'Zambales'},
{value: 'Zamboanga del Norte', name: 'Zamboanga del Norte'},
{value: 'Zamboanga del Sur', name: 'Zamboanga del Sur'},
{value: 'Zamboanga Sibugay', name: 'Zamboanga Sibugay'}]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

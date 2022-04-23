import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  publications = [
    {
      publicationDetails: `Pati, A., Parhi, M., & Pattanayak, B. K. (2021). COVID-19 Pandemic Analysis and Prediction Using Machine Learning Approaches in India. In Advances in Intelligent Computing and Communication (pp. 307-316). Springer, Singapore`,
    },
    {
      publicationDetails: `Pati, A., Parhi, M., & Pattanayak, B. K. (2021, January). IDMS: An Integrated
      Decision Making System for Heart Disease Prediction. In 2021 1st Odisha International Conference on Electrical Power Engineering Communication and Computing Technology (ODICON) (pp. 1-6). IEEE.`,
    },
    {
      publicationDetails: `Pati, A., Parhi, M., & Pattanayak, B. K. (2022). IADP: An Integrated Approach for Diabetes Prediction Using Classification Techniques. In Advances in Distributed Computing and Machine Learning (pp. 287-298). Springer, Singapore`,
    },
    {
      publicationDetails: `Pati, A., Parhi, M., and Pattanayak, B. K., “IHDPM: An Integrated Heart Disease Prediction Model for Heart Disease Prediction”, International Journal of Medical Engineering and Informatics, Inderscience Publications, Vol. 14, No. 6. DOI: 10.1504/IJMEI.2022.10044903 (Article in Press)`,
    },
    {
      publicationDetails: `Pati, A., Parhi, M., and Pattanayak, B. K., “A Review on Prediction of Diabetes
      using Machine Learning and Data Mining Classification Techniques”, International
      Journal of Biomedical Engineering and Technology, Inderscience Publications.
      (Article in Press)`,
    },
    {
      publicationDetails: `Pati. A., Parhi, M., and Pattanayak, B. K., “IoT-Fog-Edge-Cloud Computing
      Simulation Tools, A Systematic Review," International Journal of Smart Sensor
      and Adhoc Network: Vol. 3: Iss. 2, Article 3. DOI: 10.47893/IJSSAN.2022.1206`,
    },
    {
      publicationDetails: `Sahoo, J., Dash, M., & Pati, A. (2020). “Diabetes Prediction Using Machine
      Learning Classification Algorithms”, International Research Journal of
      Engineering and Technology (IRJET), Vol. 7: Iss. 8.`,
    },
    {
      publicationDetails: `Panigrahi, A., Dash, M., Sahu, B., Pati, A., and Mohanty, S. N., “Machine
      Learning-based Integrated approach for Cancer Microarray data analysis”, River
      Publications. (Accepted)`,
    },
    {
      publicationDetails: `Pati. A., Parhi, M., and Pattanayak, B. K., “HeartFog: Fog computing enabled
      ensemble deep learning framework for automatic heart disease diagnosis”, In
      proceedings of the Conference ICICC-2021, Springer. (Accepted)
      `,
    },
    {
      publicationDetails: `Roul, A., Pati. A., and Parhi, M., “COVIHunt: an Intelligent CNN based COVID19
      detection using CXR imaging”, In proceedings of the Conference ESIC-2021,
      Springer. (Accepted)
      `,
    },
    {
      publicationDetails: `Youssef, A., Pati. A., and Parhi, M., “An Efficient Service Recommendation with
      Spatial-Temporal Aware QoS Prediction Mechanism in Cloud Computing
      Environment”, In proceedings of the Conference ICACIE-2021, Springer.
      (Accepted)
      `,
    },
    {
      publicationDetails: `Pati. A., Parhi, M., and Pattanayak, B. K., “An Intelligent Diagnostic System for
      Type-2 Diabetes Mellitus”, In proceedings of the Conference ICAC-2021, Springer.
      (Accepted)
      `,
    },
    {
      publicationDetails: ` Rout, S. K., Sahu, B., Panigrahi, A., Nayak, B., and Pati, A., “Early Detection of
      Sepsis Using LSTM Neural Network with Electronic Health Record”, In
      proceedings of the Conference ICAIHC- 2022, Springer. (Accepted)
      `,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

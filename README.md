# Market Control Room
## Energy Market Deep Learning Explorer

A UI for watching the results of energy market deep learning simulations. The code for these deep learning simulations, as well as more information about the project, can be found at the [project github](https://github.com/luke-marshall/energy-market-deep-learning).

## Usage
New simulations can be logged by posting JSON data to /api/simdata.

Currently Expected keys:
- label
- hyperparameters

## Notes
Make demand discrete in a tiny range
Then show each participant their opponents moves last time demand was at that level. 

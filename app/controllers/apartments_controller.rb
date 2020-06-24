class ApartmentsController < ApplicationController
    def index #shows listings of all the apartments on unregistered-users end
        apartments = Apartment.all
        render json: apartments
    end

    def create
    end
    def root
    end
end

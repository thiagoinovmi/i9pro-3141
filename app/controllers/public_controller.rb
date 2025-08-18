# TODO: we should switch to ActionController::API for the base classes
# One of the specs is failing when I tried doing that, lets revisit in future
class PublicController < ActionController::Base
  include RequestExceptionHandler
  skip_before_action :verify_authenticity_token

  private

  def ensure_custom_domain_request
    domain = request.host
    return if DomainHelper.chatwoot_domain?(domain)

    @portal = ::Portal.find_by(custom_domain: domain)
    return if @portal.present?

    render json: {
      error: "Domínino: #{domain} não está registrado com a Inovmi. \
      Envie-nos um e-mail para support@inovmi.com com o nome de domínio personalizado e a chave API da conta"
    }, status: :unauthorized and return
  end
end

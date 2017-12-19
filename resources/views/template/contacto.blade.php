@extends('layout.master')

@section('content')
<section class="comonSection">
    <div class="main-container container">
                <ul class="breadcrumb">
                    <li><a ui-sref="start"><i class="fa fa-home"></i></a></li>
                    <li><a href="#">@lang('front.contact')</a></li>
                </ul>

                <div class="row">
                    <div id="content" class="col-sm-12">
                        <div class="page-title">
                            <h2>@lang('front.cancontact')</h2>
                        </div>


                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.6670514388625!2d-103.43892126307638!3d20.591993877470085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac9713b43553%3A0xea350b9c31ef0378!2sCotton+Republic%2C+Grupo+Confecciones+Allen!5e0!3m2!1ses!2smx!4v1501072982588" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                        <div class="info-contact clearfix">
                            <div class="col-lg-4 col-sm-4 col-xs-12 info-store">
                                <div class="row">
                                    <div class="name-store">
                                        <h3>@lang('front.visit') </h3>
                                    </div>
                                    <address>
                                        <div class="address clearfix form-group">
                                            <div class="icon">
                                                <i class="fa fa-home"></i>
                                            </div>
                                            <div class="text">45234, Calle El Campanario 2612, El Campanario, Zapopan, Jal.</div>
                                        </div>
                                        <div class="phone form-group">
                                            <div class="icon">
                                                <i class="fa fa-phone"></i>
                                            </div>
                                            <div class="text">@lang('front.phone') : <span ng-bind-html="empresa.telefono"></spanng-bind-html></div>
                                        </div>
                                    </address>
                                </div>
                            </div>
                            <div class="col-lg-8 col-sm-8 col-xs-12 contact-form">
                                <form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                                    <fieldset>
                                        <legend>@lang('front.contactform') </legend>
                                        <div class="form-group required">
                                    <label class="col-sm-2 control-label" for="input-name">@lang('front.urname') </label>
                                    <div class="col-sm-10">
                                        <input type="text" name="name" value="" id="input-name" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <label class="col-sm-2 control-label" for="input-email">@lang('front.uremail') </label>
                                        <div class="col-sm-10">
                                            <input type="text" name="email" value="" id="input-email" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-group required">
                                            <label class="col-sm-2 control-label" for="input-enquiry">@lang('front.urmessage') </label>
                                            <div class="col-sm-10">
                                                <textarea name="enquiry" rows="10" id="input-enquiry" class="form-control"></textarea>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="buttons">
                                        <div class="pull-right">
                                            <button class="btn btn-default buttonGray" type="submit">
                                                <span>@lang('front.senmessage') </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

@endsection

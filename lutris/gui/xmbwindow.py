# -*- coding: utf-8 -*-

""" 

    Dependencies:
        apt-get install gir1.2-webkit-3.0
        apt-get install --reinstall python-gi

    References:
        http://www.programcreek.com/python/example/6186/webkit.WebView
        https://docs.python.org/2/library/xml.etree.elementtree.html

"""

import os
import sys
import json
import time
import threading
import gi
gi.require_version('Gtk', '3.0')
gi.require_version('WebKit', '3.0')

from gi.repository import Gtk
from gi.repository import WebKit
from gi.repository import GObject

from lutris.util import datapath

from .xmbjoystick import XMBJoystick

GObject.threads_init()

class XMBWindow(Gtk.ApplicationWindow):

    __gtype_name__ = 'XMBWindow'
    
    def __init__(self, application, **kwargs):
        #print(self.game_list)
        self.lutris = application

        window = Gtk.Window()
        window.set_size_request(800,600)

        # webkit (see use of webkit, cause this use jdk with alot dependencies)
        webView = WebKit.WebView()
        webView.connect("load-finished", self.on_load_finished)
        webView.open('' + os.path.join(datapath.get(), 'xmb', 'index.html'))

        settings = WebKit.WebSettings()
        settings.set_property('enable-default-context-menu', False)
        settings.set_property('enable-file-access-from-file-uris', True)
        webView.set_settings(settings)

        # to close window correct
        window.connect("destroy", self.on_quit)

        # scroll
        scrolls = Gtk.ScrolledWindow()
        scrolls.add(webView)

        # add webkit and start window
        #window.fullscreen()
        window.add(scrolls)
        window.show_all()
        Gtk.main()

    """
        execute when page refresh
        """
    def on_load_finished(self, webview, frame):
        row_json = json.dumps(self.lutris.game_list)
        
        js = """
            Lutris.game_list = JSON.parse('%s'); +
            LauncherInit();
            """ % row_json

        webview.execute_script(js)

        # Inicia o joystick
        t = XMBJoystick(webview)
        t.daemon = True
        t.start()

    """
        on close window
        """
    def on_quit(self, window):
        Gtk.main_quit()
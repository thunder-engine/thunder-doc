.. _api_Foldout:

Foldout
=======

Inherited: None

.. _api_Foldout_description:

Description
-----------

The Foldout class manages a UI widget that can show or hide additional content based on its expanded state. It includes functionality for adding widgets to the foldout, toggling its expanded state.



.. _api_Foldout_public:

Public Methods
--------------

+--------------+---------------------------------------------------------------+
|         void | :ref:`addWidget<api_Foldout_addWidget>` (Widget * widget)     |
+--------------+---------------------------------------------------------------+
|         bool | :ref:`isExpanded<api_Foldout_isExpanded>` () const            |
+--------------+---------------------------------------------------------------+
|         void | :ref:`onExpand<api_Foldout_onExpand>` ()                      |
+--------------+---------------------------------------------------------------+
|         void | :ref:`setExpanded<api_Foldout_setExpanded>` (bool  expanded)  |
+--------------+---------------------------------------------------------------+
|         void | :ref:`setText<api_Foldout_setText>` (const std::string  text) |
+--------------+---------------------------------------------------------------+
|  std::string | :ref:`text<api_Foldout_text>` () const                        |
+--------------+---------------------------------------------------------------+



.. _api_Foldout_static:

Static Methods
--------------

None

.. _api_Foldout_methods:

Methods Description
-------------------

.. _api_Foldout_addWidget:

 void **Foldout::addWidget** (:ref:`Widget<api_Widget>` * *widget*)

Adds a *widget* to the foldout's container, effectively placing it inside the foldout's expanded content area.

----

.. _api_Foldout_isExpanded:

 bool **Foldout::isExpanded** () const

Returns true id foldout is currently expanded; otherwise returns false.

----

.. _api_Foldout_onExpand:

 void **Foldout::onExpand** ()

Toggles the expanded state of the foldout when the indicator is clicked.

----

.. _api_Foldout_setExpanded:

 void **Foldout::setExpanded** (bool  *expanded*)

Expands or collapses the foldout based on the *expanded* parameter.

**See also** isExpanded().

----

.. _api_Foldout_setText:

 void **Foldout::setText** (std::string  *text*)

Sets the label *text* for the foldout.

**See also** *text*().

----

.. _api_Foldout_text:

 std::string **Foldout::text** () const

Returns the current text of the foldout's label.

**See also** setText().



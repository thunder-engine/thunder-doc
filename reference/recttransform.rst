.. _api_RectTransform:

RectTransform
=============

Inherited: None

.. _api_RectTransform_description:

Description
-----------

The ProgressBar class is designed to provide a graphical representation of progress with customizable appearance and range. It supports features such as setting the minimum and maximum values, adjusting the progress value, and specifying visual elements for background and progress indicator.



.. _api_RectTransform_public:

Public Methods
--------------

+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                :ref:`Vector4<api_Vector4>` | :ref:`border<api_RectTransform_border>` () const                                                 |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`hoveredTransform<api_RectTransform_hoveredTransform>` (float  x, float  y)                 |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       bool | :ref:`isHovered<api_RectTransform_isHovered>` (float  x, float  y) const                         |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                :ref:`Layout<api_Layout>` * | :ref:`layout<api_RectTransform_layout>` () const                                                 |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                :ref:`Vector4<api_Vector4>` | :ref:`margin<api_RectTransform_margin>` () const                                                 |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                :ref:`Vector2<api_Vector2>` | :ref:`maxAnchors<api_RectTransform_maxAnchors>` () const                                         |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                :ref:`Vector2<api_Vector2>` | :ref:`minAnchors<api_RectTransform_minAnchors>` () const                                         |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       bool | :ref:`mouseTracking<api_RectTransform_mouseTracking>` () const                                   |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                :ref:`Vector4<api_Vector4>` | :ref:`padding<api_RectTransform_padding>` () const                                               |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                :ref:`Vector2<api_Vector2>` | :ref:`pivot<api_RectTransform_pivot>` () const                                                   |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setAnchors<api_RectTransform_setAnchors>` (const Vector2  minimum, const Vector2  maximum) |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setBorder<api_RectTransform_setBorder>` (const Vector4  border)                            |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setEnabled<api_RectTransform_setEnabled>` (bool  enabled)                                  |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setLayout<api_RectTransform_setLayout>` (Layout * layout)                                  |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setMargin<api_RectTransform_setMargin>` (const Vector4  margin)                            |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setMaxAnchors<api_RectTransform_setMaxAnchors>` (const Vector2  anchors)                   |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setMinAnchors<api_RectTransform_setMinAnchors>` (const Vector2  anchors)                   |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setMouseTracking<api_RectTransform_setMouseTracking>` (bool  tracking)                     |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setPadding<api_RectTransform_setPadding>` (const Vector4  padding)                         |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setPivot<api_RectTransform_setPivot>` (const Vector2  pivot)                               |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setSize<api_RectTransform_setSize>` (const Vector2  size)                                  |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                :ref:`Vector2<api_Vector2>` | :ref:`size<api_RectTransform_size>` () const                                                     |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`subscribe<api_RectTransform_subscribe>` (Widget * widget)                                  |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                       void | :ref:`unsubscribe<api_RectTransform_unsubscribe>` (Widget * widget)                              |
+--------------------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_RectTransform_static:

Static Methods
--------------

None

.. _api_RectTransform_methods:

Methods Description
-------------------

.. _api_RectTransform_border:

 :ref:`Vector4<api_Vector4>`  **RectTransform::border** () const

Returns the border width of the RectTransform. The Vector4 contains border widths in top, right, bottom and left order.

**See also** setBorder().

----

.. _api_RectTransform_hoveredTransform:

 :ref:`RectTransform<api_RectTransform>` * **RectTransform::hoveredTransform** (float  *x*, float  *y*)

Returns the most top RectTransform in hierarchy wich contains the point with coodinates *x* and *y*. Returns null if no bounds.

----

.. _api_RectTransform_isHovered:

 bool **RectTransform::isHovered** (float  *x*, float  *y*) const

Returns true if the point with coordinates *x* and *y* is within the bounds, otherwise false.

----

.. _api_RectTransform_layout:

 :ref:`Layout<api_Layout>` * **RectTransform::layout** () const

Returns the layout assigned to the RectTransform.

**See also** setLayout().

----

.. _api_RectTransform_margin:

 :ref:`Vector4<api_Vector4>`  **RectTransform::margin** () const

Returns the margin offsets of the RectTransform. The Vector4 contains offsets in top, right, bottom and left order.

**See also** setMargin().

----

.. _api_RectTransform_maxAnchors:

 :ref:`Vector2<api_Vector2>`  **RectTransform::maxAnchors** () const

Returns the maximum anchors of the RectTransform.

**See also** setMaxAnchors().

----

.. _api_RectTransform_minAnchors:

 :ref:`Vector2<api_Vector2>`  **RectTransform::minAnchors** () const

Returns the minimum anchors of the RectTransform.

**See also** setMinAnchors().

----

.. _api_RectTransform_mouseTracking:

 bool **RectTransform::mouseTracking** () const

Returns true if this area is interactable with mouse; otherwise returns false. Returns true by the default.

**See also** setMouseTracking().

----

.. _api_RectTransform_padding:

 :ref:`Vector4<api_Vector4>`  **RectTransform::padding** () const

Returns the padding offset of the RectTransform. The Vector4 contains padding offsets in top, right, bottom and left order.

**See also** setPadding().

----

.. _api_RectTransform_pivot:

 :ref:`Vector2<api_Vector2>`  **RectTransform::pivot** () const

Returns the pivot point of the RectTransform.

**See also** setPivot().

----

.. _api_RectTransform_setAnchors:

 void **RectTransform::setAnchors** (:ref:`Vector2<api_Vector2>`  *minimum*, :ref:`Vector2<api_Vector2>`  *maximum*)

Sets both the *minimum* and *maximum* anchors of the RectTransform.

----

.. _api_RectTransform_setBorder:

 void **RectTransform::setBorder** (:ref:`Vector4<api_Vector4>`  *border*)

Sets the top, right, bottom and left *border* width of the RectTransform.

**See also** *border*().

----

.. _api_RectTransform_setEnabled:

 void **RectTransform::setEnabled** (bool  *enabled*)

Reimplements: Component::setEnabled(bool *enabled*).

Sets current state of RectTransform to *enabled* or disabled.

----

.. _api_RectTransform_setLayout:

 void **RectTransform::setLayout** (:ref:`Layout<api_Layout>` * *layout*)

Sets the *layout* for the RectTransform.

**See also** *layout*().

----

.. _api_RectTransform_setMargin:

 void **RectTransform::setMargin** (:ref:`Vector4<api_Vector4>`  *margin*)

Sets the top, right, bottom and left *margin* offsets of the RectTransform.

**See also** *margin*().

----

.. _api_RectTransform_setMaxAnchors:

 void **RectTransform::setMaxAnchors** (:ref:`Vector2<api_Vector2>`  *anchors*)

Sets the maximum *anchors* of the RectTransform.

**See also** maxAnchors().

----

.. _api_RectTransform_setMinAnchors:

 void **RectTransform::setMinAnchors** (:ref:`Vector2<api_Vector2>`  *anchors*)

Sets the minimum *anchors* of the RectTransform.

**See also** minAnchors().

----

.. _api_RectTransform_setMouseTracking:

 void **RectTransform::setMouseTracking** (bool  *tracking*)

Sets mouse *tracking* enabled or disabled.

**See also** mouseTracking().

----

.. _api_RectTransform_setPadding:

 void **RectTransform::setPadding** (:ref:`Vector4<api_Vector4>`  *padding*)

Sets the top, right, bottom and left *padding* offsets of the RectTransform.

**See also** *padding*().

----

.. _api_RectTransform_setPivot:

 void **RectTransform::setPivot** (:ref:`Vector2<api_Vector2>`  *pivot*)

Sets the *pivot* point of the RectTransform.

**See also** *pivot*().

----

.. _api_RectTransform_setSize:

 void **RectTransform::setSize** (:ref:`Vector2<api_Vector2>`  *size*)

Sets the *size* of the RectTransform.

**See also** *size*().

----

.. _api_RectTransform_size:

 :ref:`Vector2<api_Vector2>`  **RectTransform::size** () const

Returns the size of the associated UI element.

**See also** setSize().

----

.. _api_RectTransform_subscribe:

 void **RectTransform::subscribe** (:ref:`Widget<api_Widget>` * *widget*)

Subscribes a *widget* to changes in the RectTransform.

----

.. _api_RectTransform_unsubscribe:

 void **RectTransform::unsubscribe** (:ref:`Widget<api_Widget>` * *widget*)

Unsubscribes a *widget* from changes in the RectTransform.



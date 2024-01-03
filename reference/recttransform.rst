.. _api_RectTransform:

RectTransform
=============

Inherited: :doc:`Transform<api_Transform>`

.. _api_RectTransform_description:

Description
-----------

The ProgressBar class is designed to provide a graphical representation of progress with customizable appearance and range. It supports features such as setting the minimum and maximum values, adjusting the progress value, and specifying visual elements for background and progress indicator.



.. _api_RectTransform_public:

Public Methods
--------------

+------------------------------+--------------------------------------------------------------------------------------------------+
|                         bool | :ref:`isHovered<api_RectTransform_isHovered>` (float  x, float  y) const                         |
+------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`Layout<api_Layout>` * | :ref:`layout<api_RectTransform_layout>` () const                                                 |
+------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`maxAnchors<api_RectTransform_maxAnchors>` () const                                         |
+------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`minAnchors<api_RectTransform_minAnchors>` () const                                         |
+------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`offsetMax<api_RectTransform_offsetMax>` () const                                           |
+------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`offsetMin<api_RectTransform_offsetMin>` () const                                           |
+------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`pivot<api_RectTransform_pivot>` () const                                                   |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setAnchors<api_RectTransform_setAnchors>` (const Vector2  minimum, const Vector2  maximum) |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setLayout<api_RectTransform_setLayout>` (Layout * layout)                                  |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setMaxAnchors<api_RectTransform_setMaxAnchors>` (const Vector2  anchors)                   |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setMinAnchors<api_RectTransform_setMinAnchors>` (const Vector2  anchors)                   |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setOffsetMax<api_RectTransform_setOffsetMax>` (const Vector2  offset)                      |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setOffsetMin<api_RectTransform_setOffsetMin>` (const Vector2  offset)                      |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setOffsets<api_RectTransform_setOffsets>` (const Vector2  minimum, const Vector2  maximum) |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setPivot<api_RectTransform_setPivot>` (const Vector2  pivot)                               |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`setSize<api_RectTransform_setSize>` (const Vector2  size)                                  |
+------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`size<api_RectTransform_size>` () const                                                     |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`subscribe<api_RectTransform_subscribe>` (Widget * widget)                                  |
+------------------------------+--------------------------------------------------------------------------------------------------+
|                         void | :ref:`unsubscribe<api_RectTransform_unsubscribe>` (Widget * widget)                              |
+------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`worldTransform<api_RectTransform_worldTransform>` () const                                 |
+------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_RectTransform_static:

Static Methods
--------------

None

.. _api_RectTransform_methods:

Methods Description
-------------------

.. _api_RectTransform_isHovered:

 bool **RectTransform::isHovered** (float  *x*, float  *y*) const

Returns true if the point with coodinates *x* and *y* is within the bounds, otherwise false.

----

.. _api_RectTransform_layout:

 :ref:`Layout<api_Layout>`* **RectTransform::layout** () const

Returns the layout assigned to the RectTransform.

**See also** setLayout().

----

.. _api_RectTransform_maxAnchors:

 :ref:`Vector2<api_Vector2>` **RectTransform::maxAnchors** () const

Returns the maximum anchors of the RectTransform.

**See also** setMaxAnchors().

----

.. _api_RectTransform_minAnchors:

 :ref:`Vector2<api_Vector2>` **RectTransform::minAnchors** () const

Returns the minimum anchors of the RectTransform.

**See also** setMinAnchors().

----

.. _api_RectTransform_offsetMax:

 :ref:`Vector2<api_Vector2>` **RectTransform::offsetMax** () const

Returns the top-right offset of the RectTransform.

**See also** setOffsetMax().

----

.. _api_RectTransform_offsetMin:

 :ref:`Vector2<api_Vector2>` **RectTransform::offsetMin** () const

Returns the bottom-left offset of the RectTransform.

**See also** setOffsetMin().

----

.. _api_RectTransform_pivot:

 :ref:`Vector2<api_Vector2>` **RectTransform::pivot** () const

Returns the pivot point of the RectTransform.

**See also** setPivot().

----

.. _api_RectTransform_setAnchors:

 void **RectTransform::setAnchors** (:ref:`Vector2<api_Vector2>`  *minimum*, :ref:`Vector2<api_Vector2>`  *maximum*)

Sets both the *minimum* and *maximum* anchors of the RectTransform.

----

.. _api_RectTransform_setLayout:

 void **RectTransform::setLayout** (:ref:`Layout<api_Layout>` * *layout*)

Sets the *layout* for the RectTransform.

**See also** *layout*().

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

.. _api_RectTransform_setOffsetMax:

 void **RectTransform::setOffsetMax** (:ref:`Vector2<api_Vector2>`  *offset*)

Sets the top-right *offset* of the RectTransform.

**See also** *offset*Max().

----

.. _api_RectTransform_setOffsetMin:

 void **RectTransform::setOffsetMin** (:ref:`Vector2<api_Vector2>`  *offset*)

Sets the bottom-left *offset* of the RectTransform.

**See also** *offset*Min().

----

.. _api_RectTransform_setOffsets:

 void **RectTransform::setOffsets** (:ref:`Vector2<api_Vector2>`  *minimum*, :ref:`Vector2<api_Vector2>`  *maximum*)

Sets both the *minimum* and *maximum* offsets of the RectTransform.

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

 :ref:`Vector2<api_Vector2>` **RectTransform::size** () const

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

----

.. _api_RectTransform_worldTransform:

 :ref:`Matrix4<api_Matrix4>` **RectTransform::worldTransform** () const

Reimplements: Transform::worldTransform() const.

Returns the world transformation matrix of the RectTransform.


